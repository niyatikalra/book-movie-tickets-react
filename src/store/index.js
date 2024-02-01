import {configureStore} from '@reduxjs/toolkit'
import movieDataSlice from './movieDataSlice';
import showSummarySlice from './showSummarySlice';

const store= configureStore({
  reducer: {
    movieData:  movieDataSlice.reducer,
    showSummary: showSummarySlice.reducer,
  }
})

export default store;