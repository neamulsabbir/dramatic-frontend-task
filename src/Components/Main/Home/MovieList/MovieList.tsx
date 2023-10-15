import { getMovies } from "@/redux/features/BollywoodMovies/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MoviesCard from "@/Components/SharedFile/MoviesCard/MoviesCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <CardsGrid>
        {movies.slice(2, 9).map((movie, i) => (
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
