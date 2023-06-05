import { useRef } from 'react';
import styles from './timer_card.module.scss';

const TimerCard = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const startTimer = () => {
    if(!maskRef.current || !spinnerRef.current || !filterRef.current) return;
    spinnerRef.current.animate([{animation: "rota 1s linear"}])
    filterRef.current.style.animation = "opa 1s steps(1, end) reverse";
    maskRef.current.style.animation = "opa 1s steps(1, end)"
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {
          (
            <>
              <div ref={spinnerRef} className={`${styles.pie} ${styles.spinner}`}></div>
              <div className={`${styles.pie} ${styles.filler}`}></div>
              <div className={styles.mask}></div>
            </>
          )
          //아이디어: 여기에 태그들을 쑤셔넣고 태그들이 버튼을 누를때에만 보이도록 구축하면 될듯.
        }
        <div className={styles.time_shower}></div>
      </div>
      <button onClick={startTimer}>타이머 시작하기</button>
    </div>
  );
};

export default TimerCard;