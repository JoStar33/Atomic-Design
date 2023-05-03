import { BsPlusCircle } from 'react-icons/bs';
import styles from './registbutton.module.scss';

interface Props {
  text: string;
  handleClick: () => void;
} 

const RegistButton = ({text, handleClick}: Props) => {
  return (
    <button className={styles.regist_button} onClick={handleClick}>
      <BsPlusCircle/>
      {
        text
      }
    </button>
  );
};

export default RegistButton;