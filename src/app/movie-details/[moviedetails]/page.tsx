"use client";
import MovieDetail from "@/Components/SharedFile/MovieDetail/MovieDetail";
import { getMovies } from "@/redux/features/BollywoodMovies/moviesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface TitleParams {
  params: string;
}
const MovieDetails = ({ params }: TitleParams) => {
    
  return (
    <div>
      <MovieDetail />
    </div>
  );
};

export default MovieDetails;
