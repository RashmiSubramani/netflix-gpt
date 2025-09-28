import { useDispatch, useSelector } from "react-redux";
import { language } from "../../../../utils/constants/languageConstants";
import client from "../../../../utils/openai";
import { useRef } from "react";
import { API_OPTIONS } from "../../../../utils/constants/constants";
import { addGPTSearchMovieResult } from "../../../../utils/store/slice/gptSlice";

export default function GPTSearchBar() {
  const languageKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchTextRef = useRef(null);

  async function handleGPTSearch() {
    const gptQuery = `Act as a movie recommendation system and suggest 5 movies for the query: ${searchTextRef.current.value}. Only return names, comma-separated.`;

    try {
      // 1️⃣ Call backend GPT endpoint
      const response = await fetch("http://localhost:5000/api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: gptQuery }),
      });
      const data = await response.json();

      console.log("Data", data);

      // 2️⃣ Search TMDB for each recommended movie
      const gptMovies = data.output
        .split("\n") // split by each line
        .map((m) =>
          m
            .replace(/^\d+\.\s*/, "")
            .replace(/["]/g, "")
            .trim()
        ) // remove numbers, dots, quotes, and trim
        .filter(Boolean);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // [Promise, Promise, Promise, Promise, Promise]
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGPTSearchMovieResult({
          movieNames: gptMovies,
          movieDetails: tmdbResults,
        })
      );

      console.log("tmdbResults", tmdbResults);
    } catch (error) {
      console.error("Error during GPT search:", error);
    }
  }

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center text-xl">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg m-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="gptSearch"
          name="gptSerach"
          type="text"
          placeholder={`${language[languageKey].gptSearchPlaceHolder}`}
          className="col-span-9 p-4 m-4 bg-transparent  border-4 border-gray-400 rounded-xl text-white"
          ref={searchTextRef}
        />
        <button
          className="col-span-3 p-6 m-4 rounded-xl text-white bg-red-600 "
          onClick={handleGPTSearch}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
}
