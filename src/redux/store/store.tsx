import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/BollywoodMovies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
