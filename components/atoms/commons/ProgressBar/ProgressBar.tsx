import React from "react";
import styles from "./progressbar.module.scss";

interface Props extends React.HTMLAttributes<HTMLProgressElement> {
  children: React.ReactNode;
  labelStyle?: React.CSSProperties;
  value: number;
}

export default React.forwardRef(function ProgressBar({
  value,
  labelStyle,
  children,
  ...rest
}: Props) {
  return (
    <div>
      <h2 style={labelStyle}>{children}</h2>
      <progress id={styles.progress} value={value} max="100" {...rest} />
    </div>
  );
});
