import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetMovieTrailer(movieId) {
  const dispatch = useDispatch();

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
  useEffect(function getMovieVideoData() {
    getMovieVideos();
  }, []);
}
