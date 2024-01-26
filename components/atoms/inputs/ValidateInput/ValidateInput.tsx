import {
  validateEmail,
  validateNick,
  validatePassword,
} from "@/utils/validate";
import styles from "./validate_input.module.scss";

interface Props {
  type: string;
  label: string;
  value: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ValidateInput({
  label,
  value,
  handleChangeValue,
  type,
}: Props) {
  return (
    <div>
      <label className={styles.validate_input_title}>{label}</label>
      <div>
        <input
          role="validation-input"
          className={styles.validate_input}
          type={type === "password" ? "password" : "text"}
          onChange={handleChangeValue}
        />
        <p className={styles.validate_text}>
          {type === "password" && validatePassword(value)}
          {type === "email" && validateEmail(value)}
          {type === "nick" && validateNick(value)}
        </p>
      </div>
    </div>
  );
}
