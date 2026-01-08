## Netflix GPT

Netflix GPT is a React-based streaming movie application with AI-powered search suggestions using GPT. It fetches data from TMDB API and provides a smooth, responsive browsing experience similar to Netflix.

## 🌐 Live Demo

**[🚀 Try Netflix GPT Live](https://netflixgpt-256a6.web.app/)**

Experience the full Netflix clone functionality with AI-powered movie search, authentication, and responsive streaming interface.

## 🔧 Backend API

**Backend API deployed on Vercel** - Serverless OpenAI GPT integration for movie recommendations.

---

## Tech Stack

- React (Create React App)
- React-router
- Redux Toolkit + React-Redux
- Tailwind CSS
- Firebase Authentication
- TMDB API
- OpenAI GPT API
- YouTube embedded trailers
- React Hooks (useState, useEffect, useRef, custom hooks)
- Responsive Design (mobile-first, Tailwind `md:` breakpoints)

---

## Login/Sign Up 
![Screenshot 2026-01-07 at 1 00 19 AM](https://github.com/user-attachments/assets/f01a7a71-aed3-4dee-b801-88f5ae4e3df8)

## Home Page with Banner
<img width="2056" height="1245" alt="image" src="https://github.com/user-attachments/assets/bffa65da-b16c-4abf-be96-733e39fd511d" />

## Different Lists 
![Screenshot 2026-01-07 at 12 53 20 AM (1)](https://github.com/user-attachments/assets/8f625203-bb81-4567-9fa7-8bba851663f5)


## Search using GPT 
<img width="2052" height="1242" alt="Screenshot 2026-01-08 at 4 32 04 PM (1)" src="https://github.com/user-attachments/assets/89d7d47e-3f8e-48d3-8f24-fa2c8f26a8db" />


---

## Features Summary

### Login/Sign Up

- Sign In / Sign Up Form
- Redirect to Browse Page

### Browse (after authentication)

- Header
- Main Movie

  - Trailer in Background
  - Title & Description

- Secondary Movie Section

  - Movie Suggestions (Movie Lists × N)

### Netflix GPT

- Search Bar
- Movie Suggestions powered by GPT

---

## Features

### 1. Authentication

- Sign Up / Login forms
- Firebase Authentication
- Redirect users based on login status (`/browse` requires login)
- Update Profile (display name & profile picture)
- Sign out functionality
- Unsubscribed `onAuthStateChanged` listener for clean-up

### 2. Browse Page

#### UI Components

- **Header**: Logo, Search functionality, Profile

- **Main Movie Section**:

  - Background trailer embedded from YouTube (autoplay & muted).
  - Movie title and description overlay.

- **Secondary Movie Section**:

  - Movies list displayed based on Popularity, Upcoming, Top Rated, etc.

- Fully responsive design using Tailwind CSS.

- Mobile-first layout: defaults to mobile, `md:` breakpoints for desktop enhancements.

#### Movie Data & State Management

- Fetch movies from TMDB API:

  - Now Playing
  - Popular
  - Top Rated
  - Upcoming

- **Redux Store Slices**:

  - `movieSlice`: stores fetched movie data.
  - `gptSlice`: stores AI-powered movie suggestions.
  - `userSlice`: stores user data
  - `configSlice`: stores language selected (multi-language)

- **Custom Hooks for API calls**:

  - `useGetNowPlayingMovies`
  - `useGetPopularMovies`
  - `useGetTopRatedMovies`
  - `useGetUpcomingMovies`

### 3. Netflix GPT (AI Integration)

- Search bar with multi-language support
- GPT API integration to generate movie suggestions
- Fetch movies suggested by GPT from TMDB
- Display suggestions using reusable Movie List component
- Memoization to optimize performance
# Force deployment trigger
