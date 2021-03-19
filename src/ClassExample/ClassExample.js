import React, { Component } from "react";
import MyConsumer from "./Context";

export default class ClassExample extends Component {
  // ? STEP 5: IF YOU NEED TO ACCESS THE DATA INSIDE THE PROVIDER, USE CONSUMER!:

  render() {
    return (
      <MyConsumer>
        {(value) => {
          return (
            <div>
              <div>{value.count}</div>;
              <button onClick={value.inc}>Increment</button>
              <button onClick={value.dec}>Decrement</button>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}
