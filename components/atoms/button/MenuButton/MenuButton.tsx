import React from "react";
import styles from "./menubutton.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  handleClick: () => void;
}

export default React.forwardRef(function MenuButton(
  { children, handleClick, ...rest }: Props,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={styles.menu_button}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </div>
  );
});
