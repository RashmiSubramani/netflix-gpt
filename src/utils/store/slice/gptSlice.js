import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieDetails: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTSearchMovieResult: (state, action) => {
      const { movieNames, movieDetails } = action.payload;
      state.movieNames = movieNames;
      state.movieDetails = movieDetails;
    },
  },
});

export const { toggleGPTSearchView, addGPTSearchMovieResult } =
  gptSlice.actions;
export default gptSlice.reducer;
