import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
  const callbackRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return
    }
    const timeout = setTimeout(callbackRef.current, delay);
    return () => clearTimeout(timeout);
  }, [delay]);
};

export default useTimeout;
