import MinusButton from "@/components/atoms/button/MinusButton/MinusButton";
import PlusButton from "@/components/atoms/button/PlusButton/PlusButton";
import { useState } from "react";
import styles from './counter_controller.module.scss';

const CounterController = () => {
  const [count, setCount] = useState<number>(0);
  const plusController = () => {
    setCount(count + 1);
  }
  const minusController = () => {
    if(!count) return;
    setCount(count - 1);
  }
  return (
    <div className={styles.counter_controller}>
      <h2>{ count }</h2>
      <PlusButton handleClick={() => plusController()}/>
      <MinusButton handleClick={() => minusController()}/>
    </div>
  );
};

export default CounterController;