import styles from "./button.module.scss";

interface Props {
  label: string;
  handleClick: () => void;
}

const Button = ({label, handleClick}: Props) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {
        label
      }
    </button>
  );
};

export default Button;