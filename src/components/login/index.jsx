import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import Header from "../header";
import { validateForm } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

// export default function Login() {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function toggleSignInForm() {
//     setIsSignInForm(!isSignInForm);
//   }

//   function handleButtonClick() {
//     //Validate form data
//     validateForm(email, password);
//   }

//   return (
//     <>
//       <Header />

//       <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg"
//         alt="background"
//         className="w-full absolute"
//       />
//       <form
//         onSubmit={() => {}}
//         className="absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 p-12 flex gap-1 flex-col text-white bg-black/70 "
//       >
//         <h1 className="font-bold text-3xl py-4">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>

//         {!isSignInForm && (
//           <input
//             id="name"
//             name="name"
//             type="name"
//             required
//             placeholder="Full name"
//             className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-500"
//           />
//         )}

//         <input
//           id="email"
//           name="email"
//           type="text"
//           required
//           placeholder="Email address"
//           className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-400"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           id="password"
//           name="password"
//           type="password"
//           required
//           placeholder="Password"
//           className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           className="p-2 my-2 bg-red-600 text-m font-bold  rounded-md w-full"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign-in" : "Sign-up"}
//         </button>
//         {isSignInForm ? (
//           <>
//             <div className="text-center">OR</div>
//             <button className="p-2 my-2 bg-gray-800 text-m font-bold  rounded-md w-full">
//               Use a sign-in code
//             </button>
//           </>
//         ) : (
//           <></>
//         )}

//         <span className="text-gray-400">
//           {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
//           <button
//             type="button"
//             onClick={toggleSignInForm}
//             className="font-bold text-white underline"
//           >
//             {isSignInForm ? "Sign up now." : "Sign in"}
//           </button>
//         </span>
//       </form>
//     </>
//   );
// }

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    //Validate form data
    console.log(emailRef, passwordRef);
    let error = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
      fullNameRef.current?.value
    );
    setErrorMessage(error);

    if (errorMessage) return;

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameRef.current?.value,
            photoURL: "https://thumbs.dreamstime.com/b/user-icon-9233164.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log("Signed Up", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing in", errorCode, errorMessage);
          // setErrorMessage(errorCode + "-" + errorMessage);
          setErrorMessage("Invalid credentials"); //auth/invalid-credential-Firebase: Error (auth/invalid-credential).
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed In", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing in", errorCode, errorMessage);
          // setErrorMessage(errorCode + "-" + errorMessage);
          setErrorMessage("Invalid credentials."); //auth/invalid-credential-Firebase: Error (auth/invalid-credential).
        });
    }
  }

  return (
    <>
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg"
        alt="background"
        className="w-full absolute h-full"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black md:w-3/12  my-36 mx-auto right-0 left-0 p-12 flex gap-1 flex-col text-white bg-black/70 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            id="name"
            name="name"
            type="name"
            required
            placeholder="Full name"
            className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-500"
            ref={fullNameRef}
          />
        )}

        <input
          id="email"
          name="email"
          type="text"
          required
          placeholder="Email address"
          className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-400"
          ref={emailRef}
        />

        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-500"
          ref={passwordRef}
        />

        {errorMessage && (
          <p className="w-full text-red-500 text-lg font-bold">
            {errorMessage}
          </p>
        )}

        <button
          className="p-2 my-2 bg-red-600 text-m font-bold  rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign-in" : "Sign-up"}
        </button>
        {isSignInForm ? (
          <>
            <div className="text-center">OR</div>
            <button className="p-2 my-2 bg-gray-800 text-m font-bold  rounded-md w-full">
              Use a sign-in code
            </button>
          </>
        ) : (
          <></>
        )}

        <span className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleSignInForm}
            className="font-bold text-white underline"
          >
            {isSignInForm ? "Sign up now." : "Sign in"}
          </button>
        </span>
      </form>
    </>
  );
}
