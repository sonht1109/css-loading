import { useEffect } from "react";

export default function useScrollTop() {
  useEffect(
    () => () => {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    },
    [] // you pass some dependencies such as useLocation, search, ...
  );
  return null;
}
