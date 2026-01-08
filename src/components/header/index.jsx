import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/store/slice/userSlice";
import {
  FALLBACK_USER_AVATAR,
  HEADER_CONSTANTS,
  LOGO_URL,
  NAV_ROUTES,
  SUPPORTED_LANGUAGES,
} from "../../utils/constants/constants";
import { toggleGPTSearchView } from "../../utils/store/slice/gptSlice";
import { changeLanguage } from "../../utils/store/slice/configSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux store values
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  // Handle Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate(NAV_ROUTES.BROWSE);
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate(NAV_ROUTES.HOME);
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Handle Sign out
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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center text-white">
      {/* Logo */}
      <img className="w-44" src={LOGO_URL} alt="logo" />

      {/* Show only if user is logged in */}
      {user && (
        <div className="flex gap-2">
          {/* Language Selector (visible only in GPT search mode) */}
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

          {/* GPT Search toggle button */}
          <button
            className="py-2 px-4 border border-white rounded-lg font-bold cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch
              ? HEADER_CONSTANTS.HOMEPAGE
              : HEADER_CONSTANTS.GPT_SEARCH}
          </button>

          {/* User profile dropdown */}
          <div className="relative group">
            <img
              src={user?.photoURL ? user.photoURL : FALLBACK_USER_AVATAR}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer"
            />

            {/* Dropdown appears on hover */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-black text-white cursor-pointer rounded-md shadow-lg opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
              <button className="block w-full px-4 py-3 text-left hover:bg-gray-800 hover:rounded-md">
                {HEADER_CONSTANTS.PROFILE}
              </button>
              <button className="block w-full px-4 py-3 text-left hover:bg-gray-800 hover:rounded-md">
                {HEADER_CONSTANTS.SETTINGS}
              </button>
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-3 text-left hover:bg-gray-800 hover:rounded-md"
              >
                {HEADER_CONSTANTS.SIGN_OUT}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
