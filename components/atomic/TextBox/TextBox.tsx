import styles from './textbox.module.scss';

interface Props {
  text: string;
  textColor?: string;
}

const TextBox = ({text, textColor = 'black'}: Props) => {
  return (
    <div className={styles.textbox} style={{color: textColor}}>
      {
        text
      }
    </div>
  );
};

export default TextBox;