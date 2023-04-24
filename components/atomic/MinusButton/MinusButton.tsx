import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import styles from './minusbutton.module.scss';

interface Props {
  minusController: () => void;
}

const MinusButton = ({ minusController }: Props) => {
  return (
    <button className={styles.minus_button} onClick={minusController}>
      <BsFillArrowDownCircleFill/>
    </button>
  );
};

export default MinusButton;