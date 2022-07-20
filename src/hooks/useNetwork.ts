import { useEffect, useState } from "react";

const useNetwork = (onChange?: (x: boolean) => void) => {
  const [status, setStatus] = useState<boolean>(navigator.onLine);

  const handleState = () => {
    onChange && onChange(navigator.onLine);
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleState);
    window.addEventListener("offline", handleState);
    return () => {
      window.removeEventListener("online", handleState);
      window.removeEventListener("offline", handleState);
    };
  }, []);

  return status;
};

export default useNetwork;
