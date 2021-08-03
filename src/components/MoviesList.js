import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const displayMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  console.log(displayMovies);

  return (
    <div>
      <h1>Display Movies</h1>
      <ul>{displayMovies}</ul>
    </div>
  );
}

export default MoviesList;
