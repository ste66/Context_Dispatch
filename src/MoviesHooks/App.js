import React from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { MyProvider } from "./Context";
function App() {
  return (
    <MyProvider>
      <AddMovie />
      <ul>
        <li>
          <MovieList />
        </li>
      </ul>
    </MyProvider>
  );
}

export default App;
