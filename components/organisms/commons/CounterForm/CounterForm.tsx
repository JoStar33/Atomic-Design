import MinusButton from "@/components/atomic/button/MinusButton/MinusButton";
import PlusButton from "@/components/atomic/button/PlusButton/PlusButton";
import { useState } from "react";
import styles from './counter_form.module.scss';

const CounterForm = () => {
  const [count, setCount] = useState<number>(0);
  const plusController = () => {
    setCount(count + 1);
  }
  const minusController = () => {
    if(!count) return;
    setCount(count - 1);
  }
  return (
    <div className={styles.counter_form}>
      <h2>{ count }</h2>
      <PlusButton plusController={() => plusController()}/>
      <MinusButton minusController={() => minusController()}/>
    </div>
  );
};

export default CounterForm;