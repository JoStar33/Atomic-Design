import React from "react";

const useInterval = (callback: () => void, delay: number, timerOn: boolean) => {
  const savedCallback = React.useRef<Function>(() => {});

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (timerOn) {
      const executeCallback = () => {
        savedCallback.current();
      };
      const timerId = setInterval(executeCallback, delay);
      return () => clearInterval(timerId);
    }
  }, [timerOn, delay]);
};

export default useInterval;
