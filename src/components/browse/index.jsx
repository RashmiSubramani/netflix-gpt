import { useGetLatestMovies } from "../../hooks/useGetLatestMovies";
import { useGetNowPlayingMovies } from "../../hooks/useGetNowPlayingMovies";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../../hooks/useGetTopRatedMovies";
import { useGetUpcomingMovies } from "../../hooks/useGetUpcomingMovies";
import Header from "../header";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

export default function Browse() {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  useGetLatestMovies();
  return (
    <div>
      <Header />
      {/* 
      - Main COntainer
        - Video Background
        - Video Title 
      - Secondary Container
        - Movie List * n
          - Movie Card * n
        */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}
