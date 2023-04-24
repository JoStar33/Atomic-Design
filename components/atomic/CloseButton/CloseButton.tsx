import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './closebutton.module.scss';

interface Props {
  close: () => void;
}

const CloseButton = ({close}: Props) => {
  return (
    <button className={styles.close_button}>
      <AiOutlineCloseCircle onClick={close} color='black'/>
    </button>
  );
};

export default CloseButton;