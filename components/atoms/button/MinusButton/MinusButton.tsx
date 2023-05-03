import { AiOutlineArrowDown } from 'react-icons/ai';
import styles from './minusbutton.module.scss';

interface Props {
  handleClick: () => void;
}

const MinusButton = ({ handleClick }: Props) => {
  return (
    <button role='minus-button' className={styles.minus_button} onClick={handleClick}>
      <AiOutlineArrowDown/>
    </button>
  );
};

export default MinusButton;