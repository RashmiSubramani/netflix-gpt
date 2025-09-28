import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { toggleGPTSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  function handleGPTSearchClick() {
    dispatch(toggleGPTSearchView());
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center text-white">
      {/* Logo */}
      <img className="w-44" src={LOGO_URL} alt="logo" />

      {/* User Icon + Dropdown (hover-based) */}
      {user && (
        <div className="flex gap-2">
          {showGPTSearch && (
            <select
              className="py-2 px-4 mr-2 bg-gray-900 text-white rounded-lg font-bold cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 border border-white rounded-lg font-bold cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "HomePage" : "GPT Search"}
          </button>
          <div className="relative group">
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://occ-0-2041-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e"
              }
              alt="user"
              className="w-10 h-10 rounded cursor-pointer"
            />

            {/* Dropdown appears on hover */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-black text-white cursor-pointer rounded-md shadow-lg opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
              <button className="block w-full px-4 py-3 text-left hover:bg-gray-800 hover:rounded-md">
                Profile
              </button>
              <button className="block w-full px-4 py-3 text-left hover:bg-gray-800 hover:rounded-md">
                Settings
              </button>
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-3 text-left hover:bg-gray-800 hover:rounded-md"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
