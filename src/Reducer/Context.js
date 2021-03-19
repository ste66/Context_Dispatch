import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, mycounter: state.mycounter + 1 };
    }
    case "DECREMENT": {
      return { ...state, mycounter: state.mycounter - 1 };
    }
    default: return state
  }

};

// ? STEP 1: CREATE YOUR CONTEXT :

export const MyContext = React.createContext();

// ? STEP 2: CREATE PROVIDER TO STORE STATE:

const MyProvider = ({ children }) => {
  // const [count, setCount] = useState({
  //   mycounter: 0,
  // });

  const initialState = { mycounter: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;



