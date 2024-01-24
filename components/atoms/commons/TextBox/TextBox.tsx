import styles from "./textbox.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  textColor?: string;
}

export default React.forwardRef(function TextBox(
  { children, textColor = "black", ...rest }: Props,
  ref: React.Ref<HTMLParagraphElement>
) {
  return (
    <p
      ref={ref}
      className={styles.textbox}
      style={{ color: textColor }}
      {...rest}
    >
      {children}
    </p>
  );
});
