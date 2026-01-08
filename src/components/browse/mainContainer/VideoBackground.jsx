import { useSelector } from "react-redux";
import { useGetMovieTrailer } from "../../../hooks/useGetMovieTrailer";
import { YOUTUBE_EMBED_BASE_URL } from "../../../utils/constants/constants";

export default function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Fetch trailer video for the given movieId
  useGetMovieTrailer(movieId);

  const embedUrl = `${YOUTUBE_EMBED_BASE_URL}${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}`;

  return (
    <div>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen aspect-video"
      ></iframe>
    </div>
  );
}
