import { RefObject } from "react";
import styles from "./search_input.module.scss";

interface SearchInputProps {
  inputRef: RefObject<HTMLInputElement>;
  handleClick: () => void;
}

const SearchInput = ({handleClick, inputRef}: SearchInputProps) => {
  return (
    <div className={styles.search_container}>
      <input className={styles.search_input} type="text" ref={inputRef}/>
      <button className={styles.search_button} onClick={handleClick}>검색</button>
    </div>
  );
};

export default SearchInput;