import { useEffect } from "react";

const useBeforeLeave = (onBefore: () => void) => {
  const eventHandler = (event: MouseEvent) => {
    //위쪽으로 벗어난다면
    const { clientY } = event;
    if (clientY > 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", eventHandler);
    return () => document.removeEventListener("mouseleave", eventHandler);
  }, []);
};

export default useBeforeLeave;
