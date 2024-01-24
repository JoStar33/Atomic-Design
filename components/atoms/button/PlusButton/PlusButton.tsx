import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./plusbutton.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
}

export default React.forwardRef(function PlusButton(
  { handleClick, ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      role="plus-button"
      className={styles.plus_button}
      onClick={handleClick}
      {...rest}
    >
      <AiOutlineArrowUp />
    </button>
  );
});
