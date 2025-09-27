import { useGetNowPlayingMovies } from "../../hooks/useGetNowPlayingMovies";
import Header from "../header";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

export default function Browse() {
  useGetNowPlayingMovies();
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
