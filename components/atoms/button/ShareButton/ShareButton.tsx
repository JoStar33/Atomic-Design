import { CiShare1 } from "react-icons/ci";
import styles from "./sharebutton.module.scss";
import React from "react";

export default React.forwardRef(function ShareButton(
  _,
  ref: React.Ref<HTMLDivElement>
) {
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <div ref={ref} onClick={handleClick} className={styles.share_button}>
      <CiShare1 />
    </div>
  );
});
