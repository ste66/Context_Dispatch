import React, { useState, useContext } from "react";
import { MyContext } from "./Context";

const AddMovie = () => {
  const { dispatch } = useContext(MyContext);

  const [myMovie, setMyMovie] = useState({ name: "", price: "" });
  const handleUpdate = (e) => {
    setMyMovie({
      ...myMovie,
      [e.target.name]: e.target.value,
    });
  };

  const addMovie = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MOVIE", payload: myMovie });
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input onChange={handleUpdate} type="text" name="name" />
        <input onChange={handleUpdate} type="text" name="price" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
