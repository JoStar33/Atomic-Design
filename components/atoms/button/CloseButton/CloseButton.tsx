import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./closebutton.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
}

export default React.forwardRef(function CloseButton(
  { handleClick, ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button ref={ref} className={styles.close_button} {...rest}>
      <AiOutlineCloseCircle onClick={handleClick} color="black" />
    </button>
  );
});
