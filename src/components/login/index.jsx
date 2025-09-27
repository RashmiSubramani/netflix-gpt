import { useState } from "react";
import Header from "../header";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg"
        alt="background"
        className="w-full absolute"
      />
      <form
        onSubmit={() => {}}
        className="absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 p-12 flex gap-1 flex-col text-white bg-black/70 "
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
          />
        )}

        <input
          id="email"
          name="email"
          type="text"
          required
          placeholder="Email address"
          className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-400"
        />

        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="p-4 my-3 w-full rounded-md bg-transparent border border-gray-500"
        />

        <button className="p-2 my-2 bg-red-600 text-m font-bold  rounded-md w-full">
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
