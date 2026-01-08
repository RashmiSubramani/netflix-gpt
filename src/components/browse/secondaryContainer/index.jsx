import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { MOVIE_CATEGORIES } from "../../../utils/constants/constants";

export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  // Return null if any movie category is missing
  if (
    !movies?.nowPlayingMovies ||
    !movies?.upcomingMovies ||
    !movies?.popularMovies ||
    !movies?.topRatedMovies
  )
    return null;
  return (
    <>
      <div className="mt-0 md:-mt-60 z-20 relative bg-black">
        {/* Render MovieList for each category */}
        {MOVIE_CATEGORIES.map(({ key, title }) => (
          <MovieList key={key} title={title} movies={movies[key]} />
        ))}
      </div>
    </>
  );
}
