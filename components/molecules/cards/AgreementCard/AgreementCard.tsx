import Button from "@/components/atoms/button/Button/Button";
import CheckBox from "@/components/atoms/commons/CheckBox/CheckBox";
import { Context } from "@/utils/Context";
import styles from "./agreement_card.module.scss";
import React from "react";

interface Props {
  initAgreement: Agreement[];
}

export default function AgreementCard({ initAgreement }: Props) {
  const { setDialog } = React.useContext(Context);
  const [agreement, setAgreement] = React.useState<Agreement[]>(initAgreement);
  const isChecked = (value: boolean, id: string) => {
    const computedAgreement = agreement.map((agreeElement) => {
      if (agreeElement.id === id) {
        agreeElement.agree = value;
        return agreeElement;
      }
      return agreeElement;
    });
    setAgreement(computedAgreement);
  };
  const isAgreeClear = (agreeElement: Agreement) => agreeElement.agree;
  const handleAgree = () => {
    setDialog("동의가 완료되었습니다.", true);
  };
  return (
    <div className={styles.agreement_card}>
      <div>
        {agreement.map((agreeElement) => (
          <CheckBox
            id={agreeElement.id}
            key={agreeElement.id}
            isChecked={(value: boolean) => isChecked(value, agreeElement.id)}
          >
            {agreeElement.label}
          </CheckBox>
        ))}
      </div>
      {agreement.every(isAgreeClear) && (
        <Button handleClick={handleAgree}>동의완료</Button>
      )}
    </div>
  );
}
