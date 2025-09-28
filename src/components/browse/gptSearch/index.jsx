import { BACKGROUND_URL } from "../../../utils/constants";
import GPTSearchBar from "./gptSearchBar";
import GPTSuggestions from "./gptSuggestions";

export default function GPTSearch() {
  return (
    <div className="w-full h-full">
      <div className="fixed -z-10 ">
        <img
          src={BACKGROUND_URL}
          alt="background"
          className="h-screen w-screen object-cover"
        />
      </div>
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
}
