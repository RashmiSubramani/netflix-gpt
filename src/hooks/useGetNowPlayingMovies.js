import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export function useGetNowPlayingMovies() {
  const dispatch = useDispatch();

  async function getNowPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log("Movies", json);
  }
  useEffect(function getCurrentMovies() {
    getNowPlayingMovies();
  }, []);
}
