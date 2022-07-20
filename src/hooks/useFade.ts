import { useEffect, useRef } from "react";

const useFade = (duration = 1, delay = 0) => {
  const element = useRef<any>(null);

  useEffect(() => {
    const { current } = element;
    if (current) {
      current.style.opacity = "1";
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default useFade;
