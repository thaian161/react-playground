import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <>
      <h2>Hello World!!!</h2>
      {!changeText && <p>It's good to see you!!!</p>}
      {changeText && <p>You just changed the text!</p>}
      <button onClick={changeTextHandler}> Change Text Above!</button>
    </>
  );
};

export default Greeting;
