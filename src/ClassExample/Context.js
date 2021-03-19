import React, { Component } from "react";

// ? STEP 1: CREATE YOUR CONTEXT :

const MyContext = React.createContext();

// ? STEP 2: CREATE PROVIDER TO STORE STATE:

export class MyProvider extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          inc: this.incrementCount,
          dec: this.decrementCount,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

// ? STEP 3:  CREATE A CONSUMER:
const MyConsumer = MyContext.Consumer;

export default MyConsumer;
