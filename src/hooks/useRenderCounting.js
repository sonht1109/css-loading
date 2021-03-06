import { useRef } from "react";

const useCountRenders = (name = 'Current page') => {
  const ref = useRef(0);
  if (ref.current === 0) {
    console.log(`%c ${name} RENDER`, "background: #222; color: yellow");
  } else
    console.log(
      `%c ${name} render: ${ref.current}`,
      "background: #222; color: yellow"
    );
  ref.current++;
};
export default useCountRenders;