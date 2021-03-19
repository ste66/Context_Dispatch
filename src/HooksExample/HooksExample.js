import React, { useContext } from "react";

import { MyContext } from "./Context";

function HooksExample() {
  //const { count, increment, decrement } = useContext(MyContext);
  const [count, setCount] = useContext(MyContext);
  return (
    <div>
      <div>{count.mycounter}</div>

      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}

      <div>{count.name}</div>
      <button
        onClick={() => {
          setCount({ ...count, name: "ece" });
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default HooksExample;
