import { AiOutlineArrowUp } from 'react-icons/ai';
import styles from './plusbutton.module.scss';

interface Props {
  handleClick: () => void;
}

const PlusButton = ({handleClick}: Props) => {
  return (
    <button role='plus-button' className={styles.plus_button} onClick={handleClick}>
      <AiOutlineArrowUp/>
    </button>
  );
};

export default PlusButton;