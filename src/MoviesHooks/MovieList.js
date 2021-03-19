import React, { useContext } from "react";
import { MyContext } from "./Context";
import Movie from "./Movie";
function MovieList() {
  const { movies } = useContext(MyContext);

  return (
    <div>
      {movies.map((movie) => {
        return <Movie name={movie.name} price={movie.price} key={movie.id} />;
      })}
    </div>
  );
}

export default MovieList;
