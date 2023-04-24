import { CiShare1 } from 'react-icons/ci';
import styles from './sharebutton.module.scss';

const ShareButton = () => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <div onClick={handleShare} className={styles.share_button}>
      <CiShare1/>
    </div>
  );
};

export default ShareButton;