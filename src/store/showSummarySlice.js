import { createSlice } from "@reduxjs/toolkit";

const showSummarySlice = createSlice({
  name: "showSummary",
  initialState: Number(" "),
  reducers: {
    showSummary(state, action) {
      console.log(action.payload);
      return action.payload;

     
    },
  },
  
});



export const showSummaryactions = showSummarySlice.actions;

export default showSummarySlice;
