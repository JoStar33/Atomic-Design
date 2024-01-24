import { BsPlusCircle } from "react-icons/bs";
import styles from "./registbutton.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick: () => void;
}

export default React.forwardRef(function RegistButton(
  { children, handleClick, ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={styles.regist_button}
      onClick={handleClick}
      {...rest}
    >
      <BsPlusCircle />
      {children}
    </button>
  );
});
