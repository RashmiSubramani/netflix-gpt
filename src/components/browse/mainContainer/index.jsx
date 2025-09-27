import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  const { title, overview, id, poster_path: posterPath } = mainMovie;

  return (
    <div className="relative w-screen">
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} posterPath={posterPath} />
    </div>
  );
}
