import styles from "./input.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  isPassword?: boolean;
  placeholder: string;
}

export default React.forwardRef(function Input(
  { isPassword = false, children, placeholder, ...rest }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div>
      <label htmlFor="input" className={styles.input_title}>
        {children}
      </label>
      <div>
        <input
          id="input"
          ref={ref}
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          className={styles.input}
          {...rest}
        />
      </div>
    </div>
  );
});
