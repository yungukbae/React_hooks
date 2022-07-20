import React, { useEffect, useState } from "react";
import useBeforeLeave from "./hooks/useBeforeLeave";
import useFade from "./hooks/useFade";
import useInput from "./hooks/useInput";
import useNetwork from "./hooks/useNetwork";
import usePrecentLeave from "./hooks/usePreventLeave";
import useScroll from "./hooks/useScroll";

const App: React.FC = () => {
  const input = useInput("");
  const { unprotect, protect } = usePrecentLeave();
  const h1cls = useFade(1, 0);
  const h2cls = useFade(1, 1);
  const net = useNetwork();
  const scr = useScroll();
  const [btn, setBtn] = useState("");
  const onBefore = () => console.log("leaving");
  useBeforeLeave(onBefore);

  const handlebtn = () => {
    console.log("click");
  };

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Input</h1>
      <input
        type="text"
        placeholder="value"
        value={input.value}
        onChange={input.onChange}
      />
      <hr />
      <h1 {...h1cls}>1s H1</h1>
      <h1 {...h2cls}>2s H2</h1>
      <button onClick={unprotect}>unprotect</button>
      <button onClick={protect}>protect</button>
      <hr />
      <h1>{net ? "online" : "offline"}</h1>
      <button onClick={handlebtn}>이것은 한번만 눌리는 버튼</button>
    </div>
  );
};

export default App;
