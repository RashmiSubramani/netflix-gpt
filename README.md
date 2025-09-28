# Netflix GPT

- create react app
- configured tailwind css
- Header
- Routing of App
- Login form
- Sign Up Form
- Form validation
- useRef Hook
- Firebase setup
- Deploy app to prod
- Create Sign up user account
- Implement Sign in user API
- Create Redux store with userSlice
- Implmented sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unubscribed the onAuthStateChange callback
- Introduced constants file
- Registered in TMDB API and create an app and get access token
- Get NowPlayingMoview List api call from TMDB
- Created custom hook for now playing movie
- Created movieSlice
- Updated store with movies data
- Plan for MainContainer and SecondaryContainer
- Fetch data for Trailer video
- Update store with trailer video data
- Embedded youtube video with autoplay and mute
- Tailwind classes to make MainContainer awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- useGetPopularMovies Custom hook
- useGetTopRatedMovies Custom hook
- useGetUpcomingMovies Custom hook
- GPT Search Page
- GPT Search Bar
- Multi Language feature
- Integrate GPT APIs

npm i -D @reduxjs/toolkit
npm i react-redux

# Features

Not Logged In :

- Login/Sign up form - once done redirect to Browse page

Logged In :

- Browse

  - Header
  - Main movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - Movie List \* n

- Netflix GPT
  - Search bar
    - Movie suggestions
