import { DialogContext } from '@/utils/DialogContext';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef, useState } from 'react';
import ValidateDialog from '../../dialogs/ValidateDialog/ValidateDialog';
import AgreementCard from "./AgreementCard";

const user = userEvent.setup();

const initAgreement = [{
  id: "1", 
  label: "동의합니까?", 
  agree: false
}, {
  id: "2", 
  label: "진짜 동의합니까?", 
  agree: false
}, {
  id: "3", 
  label: "정말로 동의합니까?", 
  agree: false
}];

const AgreementContainer = () => {
  const dialogText = useRef<string>('');
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  }
  return (
    <DialogContext.Provider value={{setDialog}}>
      <ValidateDialog dialogShow={dialogShow} dialogText={dialogText.current} handleDialog={() => setDialogShow(false)}/>
      <AgreementCard initAgreement={initAgreement}/>
    </DialogContext.Provider>
  );
}

describe("분자/카드/AgreementCard", () => {
  test("동의서 카드내에 동의를 모두 마친상태에서 다이얼로그 창이 뜨는지 확인.", async () => {
    render(
      <AgreementContainer/>
    );
    const agreementCheckBox: HTMLElement[] = [];
    initAgreement.forEach(agreement => {
      agreementCheckBox.push(screen.getByText(agreement.label));
    });
    agreementCheckBox.forEach(async checkbox => {
      await user.click(checkbox);
    });
    const agreementButton = await screen.findByText("동의완료");
    await user.click(agreementButton);
    const dialogText = await screen.findByText("동의가 완료되었습니다.");
    expect(dialogText).toBeInTheDocument();
  });
  test("동의서 카드내에 동의를 하나만 한 상태에서 버튼이 보이는지 확인", async () => {
    render(
      <AgreementContainer/>
    );
    const oneCheckBox = screen.getByText(initAgreement[0].label)
    await user.click(oneCheckBox);
    const agreementButton = screen.queryByText("동의완료");
    expect(agreementButton).not.toBeInTheDocument();
  });
});