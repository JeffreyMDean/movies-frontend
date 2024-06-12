import { MoviesIndex } from "./MoviesIndex";

export function Content() {
  const movies = [
    {id: 1, title: "Place Beyond the Pines", genre: "drama", year: 2012},
    {id: 2, title: "Alien", genre: "Sci-fi", year: 1986}
  ]
  return (
    <main>
      <MoviesIndex movies={movies} />
    </main>
  )
}