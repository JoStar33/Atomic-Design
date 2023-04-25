import { AiOutlineArrowUp } from 'react-icons/ai';
import styles from './plusbutton.module.scss';

interface Props {
  plusController: () => void;
}

const PlusButton = ({plusController}: Props) => {
  return (
    <button className={styles.plus_button} onClick={plusController}>
      <AiOutlineArrowUp/>
    </button>
  );
};

export default PlusButton;