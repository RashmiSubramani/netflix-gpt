import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants/constants";
import { addTrailerVideo } from "../utils/store/slice/movieSlice";
import { useEffect } from "react";

export function useGetMovieTrailer(movieId) {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  async function getMovieVideos() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailerVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  }
  useEffect(function getMovieVideosAPI() {
    if (!trailerVideo) getMovieVideos();
  }, []);
}
