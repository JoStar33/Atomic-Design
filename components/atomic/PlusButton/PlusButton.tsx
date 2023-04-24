import { AiOutlineArrowUp } from 'react-icons/ai';
import styles from './plusbutton.module.scss';

interface Props {
  minusController: () => void;
}

const PlusButton = ({minusController}: Props) => {
  return (
    <button className={styles.plus_button} onClick={minusController}>
      <AiOutlineArrowUp/>
    </button>
  );
};

export default PlusButton;