import React, { useContext } from "react";

import { MyContext } from "./Context";

function HooksExample() {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div>
      <div>{state.mycounter}</div>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default HooksExample;
