import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div className="px-6 py-2">
      <h1 className="text-white text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
