import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";

export function Content() {
  const [movies, setMovies] = useState([]);

  // useState([]) initializes a state variable (movies) with an empty array. The setMovies function is used to update the movies state. This hook allows you to manage and update the state within a functional component, causing the component to re-render when the state changes.

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  useEffect(handleIndexMovies, []);
  // useEffect hook takes two arguments:
  // Effect Function: fx containing the side effect logic (data fetching, setting up a subscription, or manually changing the DOM)
  // Dependencies Array: An array of values the the effect depends on. When one of these values changes, the effect will run again...the empty array means that the effect fx 'handleIndexMovies' will run only once, after the initial render which is useful for actions you only want to perform when the component is first added to the DOM, such as fetching initial data or setting up a subscription.

  return (
    <main>
      <MoviesIndex movies={movies} />
    </main>
  )
}