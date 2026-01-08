import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants/constants";
import { addUpcomingMovies } from "../utils/store/slice/movieSlice";
import { useEffect } from "react";

export function useGetUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  async function getUpcomingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(function getUpcomingMoviesAPI() {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
}
