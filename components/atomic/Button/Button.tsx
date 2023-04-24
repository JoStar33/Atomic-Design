import styles from "./button.module.scss";

interface Props {
  label: string;
  clickEvent: () => void;
}

const Button = ({label, clickEvent}: Props) => {
  return (
    <button className={styles.button} onClick={clickEvent}>
      {
        label
      }
    </button>
  );
};

export default Button;