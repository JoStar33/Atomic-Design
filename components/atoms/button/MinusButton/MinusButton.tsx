import { AiOutlineArrowDown } from 'react-icons/ai';
import styles from './minusbutton.module.scss';

interface Props {
  minusController: () => void;
}

const MinusButton = ({ minusController }: Props) => {
  return (
    <button role='minus-button' className={styles.minus_button} onClick={minusController}>
      <AiOutlineArrowDown/>
    </button>
  );
};

export default MinusButton;