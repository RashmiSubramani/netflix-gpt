import { useSelector } from "react-redux";
import { useGetNowPlayingMovies } from "../../hooks/useGetNowPlayingMovies";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../../hooks/useGetTopRatedMovies";
import { useGetUpcomingMovies } from "../../hooks/useGetUpcomingMovies";
import Header from "../header";
import GPTSearch from "./gptSearch";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

export default function Browse() {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (
    <div>
      <Header />

      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}
