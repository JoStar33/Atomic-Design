import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import styles from './star.module.scss';

interface Props {
  score: number;
  handleClick: () => void;
}

const Star = ({score, handleClick}: Props) => {
  return (
    <div className={styles.star} onClick={handleClick}>
      {
        score === 1 && <BsStarFill color="yellow" role='fill-star'/>
      }
      {
        score === 0.5 && <FaStarHalfAlt color="yellow" role='half-star'/>
      }
      {
        score === 0 && <BsStar color="yellow" role='void-star'/>
      }
    </div>
  );
};

export default Star;