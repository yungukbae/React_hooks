const usePrecentLeave = () => {
  const listener = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return {
    unprotect: disablePrevent,
    protect: enablePrevent,
  };
};

export default usePrecentLeave;
