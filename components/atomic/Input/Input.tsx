import styles from './input.module.scss';

interface Props {
  label: string;
  placeholder: string;
  setValue: (value: string) => {};
}

const Input = ({ label, placeholder, setValue }: Props) => {
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
    <div>
      <label
        htmlFor="last-name"
        className={styles.input_title}
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          onChange={handleClick}
          type="text"
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Input;
