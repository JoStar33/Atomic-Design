import CheckBox from "@/components/atomic/CheckBox/CheckBox";
import { useState } from "react";

interface Props {
  initAgreement: Agreement[];
}

const AgreementCard = ({ initAgreement }: Props) => {
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
  return (
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
  );
};

export default AgreementCard;
