import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './closebutton.module.scss';

interface Props {
  handleClick: () => void;
}

const CloseButton = ({handleClick}: Props) => {
  return (
    <button className={styles.close_button}>
      <AiOutlineCloseCircle onClick={handleClick} color='black'/>
    </button>
  );
};

export default CloseButton;