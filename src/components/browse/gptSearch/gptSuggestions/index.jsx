import { useSelector } from "react-redux";
import MovieList from "../../secondaryContainer/MovieList";

export default function GPTSuggestions() {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieDetails } = gpt;

  // Early return if GPT movie suggestions are not available
  if (!movieNames || movieNames.length === 0) return null;
  return (
    <div className="bg-black p-4 m-4 opacity-90 rounded-lg">
      {/* Render MovieList for each GPT suggested movie category */}
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieDetails[index]}
        />
      ))}
    </div>
  );
}
