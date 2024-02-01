import { createSlice } from "@reduxjs/toolkit";


const movieDataSlice = createSlice({
  name: "movieData",
  initialState: [],
  reducers: {
    setMovieData(state, action) {

      return action.payload


    }

  }
})

export const setMovieDataActions = movieDataSlice.actions;
export default movieDataSlice;