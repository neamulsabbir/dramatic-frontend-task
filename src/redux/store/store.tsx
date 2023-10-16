import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/BollywoodMovies/moviesSlice";
import sidebarSlice from "../features/sidebarSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    sidebar: sidebarSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
