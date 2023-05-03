import { CiShare1 } from 'react-icons/ci';
import styles from './sharebutton.module.scss';

const ShareButton = () => {
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <div onClick={handleClick} className={styles.share_button}>
      <CiShare1/>
    </div>
  );
};

export default ShareButton;