import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number, timerOn: boolean) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if(timerOn) {
      const executeCallback = () => {
        savedCallback.current();
      };
      const timerId = setInterval(executeCallback, delay);
      return () => clearInterval(timerId);
    }
  }, [timerOn, delay]);
};

export default useInterval;