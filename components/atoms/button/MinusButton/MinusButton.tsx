import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "./minusbutton.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
}

export default React.forwardRef(function MinusButton(
  { handleClick, ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      role="minus-button"
      className={styles.minus_button}
      onClick={handleClick}
      {...rest}
    >
      <AiOutlineArrowDown />
    </button>
  );
});
