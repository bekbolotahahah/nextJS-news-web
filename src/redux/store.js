import { configureStore } from "@reduxjs/toolkit";
import searchReduce from "./Search/searchSlice";
import newsReducer from './туцы/newsSlice'

export const store = configureStore({
  reducer: {
    search: searchReduce,
    news: newsReducer
  },
});
