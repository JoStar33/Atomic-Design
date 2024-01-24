import React from "react";
import styles from "./button.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick: () => void;
}

export default React.forwardRef(function Button(
  { children, handleClick, ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button ref={ref} className={styles.button} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
});
