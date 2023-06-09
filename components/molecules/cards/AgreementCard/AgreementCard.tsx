import Button from "@/components/atoms/button/Button/Button";
import CheckBox from "@/components/atoms/commons/CheckBox/CheckBox";
import { Context } from "@/utils/Context";
import { useContext, useState } from "react";
import styles from './agreement_card.module.scss';

interface Props {
  initAgreement: Agreement[];
}

const AgreementCard = ({ initAgreement }: Props) => {
  const { setDialog } = useContext(Context);
  const [agreement, setAgreement] = useState<Agreement[]>(initAgreement);
  const isChecked = (value: boolean, id: string) => {
    setAgreement(
      agreement.map((agreeElement) => {
        if (agreeElement.id === id) {
          agreeElement.agree = value;
          return agreeElement;
        }
        return agreeElement;
      })
    );
  };
  const isAgreeClear = (agreeElement: Agreement) => agreeElement.agree;
  const handleAgree = () => {
    setDialog("동의가 완료되었습니다.", true);
  }
  return (
    <div className={styles.agreement_card}>
      <div>
        {agreement.map((agreeElement) => (
          <CheckBox
            id={agreeElement.id}
            label={agreeElement.label}
            key={agreeElement.id}
            isChecked={(value: boolean) => isChecked(value, agreeElement.id)}
          />
        ))}
      </div> 
      {
        agreement.every(isAgreeClear) &&
        <Button label={"동의완료"} handleClick={handleAgree}/>
      }
    </div>
  );
};

export default AgreementCard;
