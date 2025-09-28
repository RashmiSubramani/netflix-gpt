import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  if (!movies || movies.length === 0) return null; // Early return if no movies

  return (
    <div className="px-6 py-2">
      {/* Movie category title */}
      <h1 className="text-white md:text-3xl text-lg py-4">{title}</h1>

      {/* Horizontal scrollable container */}
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard posterPath={movie.poster_path} key={movie.id} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
