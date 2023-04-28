import { RefObject } from 'react';
import styles from './input.module.scss';

interface Props {
  label: string;
  isPassword?: boolean;
  placeholder: string;
  valueRef: RefObject<HTMLInputElement>;
}

const Input = ({isPassword = false, label, placeholder, valueRef }: Props) => {
  return (
    <div>
      <label
        htmlFor="input"
        className={styles.input_title}
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          id="input"
          ref={valueRef}
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Input;
