import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants/constants";
import { addNowPlayingMovies } from "../utils/store/slice/movieSlice";
import { useEffect } from "react";

export function useGetNowPlayingMovies() {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  async function getNowPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(function getCurrentMovies() {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
}
