import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Return nothing if movies not loaded yet
  if (!movies) return;

  const mainMovie = movies[1];
  const { title, overview, id, poster_path: posterPath } = mainMovie;

  return (
    <div className="relative w-screen md:pt-0 pt-[30%] bg-black">
      {/* Background video of main movie */}
      <VideoBackground movieId={id} />

      {/* Title, overview, and poster of main movie */}
      <VideoTitle title={title} overview={overview} posterPath={posterPath} />
    </div>
  );
}
