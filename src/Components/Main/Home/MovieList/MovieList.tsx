import { getMovies } from "@/redux/features/BollywoodMovies/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MoviesCard from "@/Components/SharedFile/MoviesCard/MoviesCard";

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

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <CardsGrid>
        {movies.slice(2, 9).map((movie:Movie, i:number) => (
          <MoviesCard key={i} cards={movie} />
        ))}
      </CardsGrid>
    </div>
  );
};

export default MovieList;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 42px;
  overflow-x: hidden;
  
`;
