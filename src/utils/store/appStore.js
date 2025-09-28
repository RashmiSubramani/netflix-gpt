import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/movieSlice";
import GPTReducer from "./slice/gptSlice";
import configReducer from "./slice/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GPTReducer,
    config: configReducer,
  },
});

export default appStore;
