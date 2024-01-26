import styles from "./timer_card.module.scss";
import React from "react";

export default function TimerCard() {
  const [timeOver, setTimeOver] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(60);
  const savedCallback = React.useRef<Function>(() => {});

  const startTimer = () => {
    setTimeOver(!timeOver);
  };
  const timeActiver = () => {
    setCounter((counter) => counter - 1);
  };
  React.useEffect(() => {
    savedCallback.current = timeActiver;
  }, []);

  React.useEffect(() => {
    if (timeOver) {
      const executeCallback = () => {
        savedCallback.current();
      };
      const timerId = setInterval(executeCallback, 990);
      if (counter === 0) {
        setCounter(60);
        clearInterval(timerId);
        setTimeOver(!timeOver);
      }
      return () => clearInterval(timerId);
    }
  }, [timeOver, counter]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {timeOver ? (
          <>
            <div className={`${styles.pie} ${styles.spinner}`}></div>
            <div className={`${styles.pie} ${styles.filler}`}></div>
            <div className={styles.mask}></div>
          </>
        ) : (
          //아이디어: 여기에 태그들을 쑤셔넣고 태그들이 버튼을 누를때에만 보이도록 구축하면 될듯.
          <div className={styles.time_over}></div>
        )}
        <div className={styles.time_shower}>{counter}</div>
      </div>
      <button onClick={startTimer}>타이머 시작하기</button>
    </div>
  );
}
