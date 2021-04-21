import { useEffect } from "react";

const useKeyPress = (key, callback) => {
  const handlePress = (e) => {
    if (e.key === key) callback();
  };

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useKeyPress;
