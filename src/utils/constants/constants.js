// NAVIGATION CONSTANTS
export const NAV_ROUTES = {
  HOME: "/",
  BROWSE: "/browse",
  ERROR: "/error",
};

// LOGIN CONSTANTS
export const DEFAULT_AVATAR_URL = "/user_icon1.jpg";

export const INVALID_CREDENTIALS_MSG = "Invalid credentials.";

export const FORM_TITLES = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up",
};
export const BUTTON_LABELS = {
  SIGN_IN: "Sign-in",
  SIGN_UP: "Sign-up",
};
export const BACKGROUND_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg";

// HEADER CONSTANTS
export const FALLBACK_USER_AVATAR =
  "https://occ-0-2041-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e";

export const HEADER_CONSTANTS = {
  GPT_SEARCH: "GPT Search",
  HOMEPAGE: "HomePage",
  PROFILE: "Profile",
  SETTINGS: "Settings",
  SIGN_OUT: "Sign Out",
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

// BROWSE CONSTANTS
export const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed/";

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const MOVIE_CATEGORIES = [
  { key: "nowPlayingMovies", title: "Now Playing" },
  { key: "upcomingMovies", title: "Upcoming" },
  { key: "popularMovies", title: "Popular" },
  { key: "topRatedMovies", title: "Top Rated" },
];

// GPT SEARCH
export const GPT_API_URL = "http://localhost:5000/api/gpt";

// API KEYS - TO BE MOVED TO .env FILE
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDcxODdhMTgwYjQ3MDczYzk2MmIxMzMwMmUyODFkMiIsIm5iZiI6MTc1ODk3NDk1Ni45ODcsInN1YiI6IjY4ZDdkM2VjY2JjYzRjNWFiYTM4YjRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1I9aHusn7J57XUG5cW6Yxvy_hzQU63Ri6MSsdWHumA",
  },
};

export const OPENAI_KEY =
  "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";
