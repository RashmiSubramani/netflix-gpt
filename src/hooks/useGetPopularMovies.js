import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants/constants";
import { addPopularMovies } from "../utils/store/slice/movieSlice";
import { useEffect } from "react";

export function useGetPopularMovies() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  async function getPopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(function getPopularMoviesAPI() {
    if (!popularMovies) getPopularMovies();
  }, []);
}
