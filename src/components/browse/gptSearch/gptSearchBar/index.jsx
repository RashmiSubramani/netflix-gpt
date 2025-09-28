import { useSelector } from "react-redux";
import { language } from "../../../../utils/languageConstants";

export default function GPTSearchBar() {
  const languageKey = useSelector((store) => store.config.lang);
  return (
    // <div className="pt-[10%] bg-black flex justify-center text-xl">
    <div className="pt-[35%] md:pt-[10%] flex justify-center text-xl">
      {/* <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12"
      > */}
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="gptSearch"
          name="gptSerach"
          type="text"
          placeholder={`${language[languageKey].gptSearchPlaceHolder}`}
          className="col-span-9 p-4 m-4 bg-transparent  border-4 border-gray-400 rounded-xl"
        />
        <button className="col-span-3 p-6 m-4 rounded-xl text-white bg-red-600 ">
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
}
