import { useSelector } from "react-redux";
import { useGetMovieTrailer } from "../../../hooks/useGetMovieTrailer";

export default function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetMovieTrailer(movieId);

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen aspect-video"
      ></iframe>
    </div>
  );
}
