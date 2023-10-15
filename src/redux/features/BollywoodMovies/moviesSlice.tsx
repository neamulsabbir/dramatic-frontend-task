import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?api_key=b33d5a94a56607b1d2197f346b4ca1a7&query=bollywood"
  );
  const data = response.data;
  return data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        if (action.payload) {
          state.movies = action.payload;
        }
      }
    );
  },
});

export default moviesSlice.reducer;
