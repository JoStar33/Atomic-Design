import { BsPlusCircle } from 'react-icons/bs';
import styles from './registbutton.module.scss';

interface Props {
  text: string;
  regist: () => void;
} 

const RegistButton = ({text, regist}: Props) => {
  return (
    <button className={styles.regist_button} onClick={regist}>
      <BsPlusCircle/>
      {
        text
      }
    </button>
  );
};

export default RegistButton;