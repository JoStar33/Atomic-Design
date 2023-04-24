import styles from './textbox.module.scss';

interface Props {
  text: string;
}

const TextBox = ({text}: Props) => {
  return (
    <div className={styles.textbox}>
      {
        text
      }
    </div>
  );
};

export default TextBox;