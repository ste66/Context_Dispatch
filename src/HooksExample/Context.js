// 2nd way: require createContext from the library
import React, { useState } from "react";

// ? STEP 1: CREATE YOUR CONTEXT :

// 1st way: create context
export const MyContext = React.createContext();

// ? STEP 2: CREATE PROVIDER TO STORE STATE:

//  ? 1st way: to define props
//const MyProvider = (props) => {

//  ? 2nd way: to define props with destructuring
const MyProvider = ({ children }) => {
  // ! { children } = props.children

  const [count, setCount] = useState({
    mycounter: 0,
    name: "Alper",
  });

  //   const increment = () => {
  //     setCount({
  //       mycounter: count.mycounter + 1,
  //     });
  //   };

  //   const decrement = () => {
  //     setCount({
  //       mycounter: count.mycounter - 1,
  //     });
  //   };

  /* 1st Way: to export state */

  /* 2nd Way: to export state directly */
  //         < MyContext.Provider value = {{ count,setCount, increment, decrement }
  // }>

  return (
    <MyContext.Provider value={[count, setCount]}>
      {/* 1st Way: use props keyword */}
      {/* {props.children} */}

      {/* 2nd Way: use without props keyword */}
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

// ! STEP 3: NO NEED CONSUMER!
