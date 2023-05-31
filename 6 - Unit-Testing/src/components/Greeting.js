import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <>
      <h2>Hello World!!!</h2>
      {!changeText && <Output>It's good to see you!!!</Output>}
      {changeText && <Output>You just changed the text!</Output>}
      <button onClick={changeTextHandler}> Change Text Above!</button>
    </>
  );
};

export default Greeting;
