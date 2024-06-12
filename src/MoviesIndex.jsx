export function MoviesIndex(props) {
  return ( //returns JSX (JS XML), a syntax ext. for JS that looks like HTML
    <div>
      <h1>All movies</h1>
      {props.movies.map((movie) => (  //{} used to embed JS expressions with JSX
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.genre}</p>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}
// props.movies refers to an array of movies passed as a prop to this component
// .map((movie) => ... ): iterates over each movie object in the props.movies array and returns a new array of JSX elements.
// <div key={movie.id}>: Creates a <div> element with a key attribute set to movie.id. Keys help React identify which items have changed, are added, or are removed.
// it maps over the props.movies array to dynamically generate JSX elements for each movie, displaying its title, genre, and year.