import { RefObject } from "react";
import styles from "./search_input.module.scss";
import React from "react";

interface SearchInputProps extends React.HTMLAttributes<HTMLInputElement> {
  inputRef: RefObject<HTMLInputElement>;
  handleClick: () => void;
}

export default React.forwardRef(function SearchInput(
  { handleClick }: SearchInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className={styles.search_container}>
      <input className={styles.search_input} type="text" ref={ref} />
      <button className={styles.search_button} onClick={handleClick}>
        검색
      </button>
    </div>
  );
});
