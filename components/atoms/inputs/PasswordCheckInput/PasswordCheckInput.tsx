import { validatePasswordCheck } from "@/utils/validate";
import styles from "./password_check_input.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  value: string;
  checkValue: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default React.forwardRef(function PasswordCheckInput(
  { children, value, checkValue, handleChangeValue, ...rest }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div>
      <label className={styles.password_check_input_title}>{children}</label>
      <div>
        <input
          ref={ref}
          className={styles.password_check_input}
          type="password"
          onChange={handleChangeValue}
          {...rest}
        />
        <p className={styles.password_check_text}>
          {validatePasswordCheck(value, checkValue)}
        </p>
      </div>
    </div>
  );
});
