import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    console.log("User signed out");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center text-white">
      {/* Logo */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* User Icon + Dropdown (hover-based) */}
      {user && (
        <div className="relative group">
          <img
            // src="https://occ-0-2041-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e"
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
      )}
    </div>
  );
}
