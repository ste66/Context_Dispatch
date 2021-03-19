import React, { useReducer } from "react";
export const MyContext = React.createContext();

const reducer = (movies, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...movies,
        {
          id: Math.random(),
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
      default: return  movies
  }
};

export const MyProvider = (props) => {
  const initialState = [
    { name: "Harry", price: "10 euro", id: 1 },
    { name: "Harry1", price: "10 euro", id: 2 },
    { name: "Harry2", price: "10 euro", id: 3 },
  ];
  const [movies, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
};
