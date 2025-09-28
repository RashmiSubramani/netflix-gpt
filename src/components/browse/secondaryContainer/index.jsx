import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <div>Secondary Container</div>
      {movies?.nowPlayingMovies &&
        movies?.popularMovies &&
        movies?.topRatedMovies &&
        movies?.upcomingMovies && (
          <div className="-mt-60 z-20 relative">
            <MovieList
              title={"Now Playing"}
              movies={movies?.nowPlayingMovies}
            />
            <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          </div>
        )}

      {/* 
      MovieList - Popular
        - Movie Card
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Genre
      */}
    </>
  );
}
