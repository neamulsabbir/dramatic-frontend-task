"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import DownArrow from "@/Components/SharedFile/SVGIcon/DownArrow";
import MoviesCard from "@/Components/SharedFile/MoviesCard/MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "@/redux/features/BollywoodMovies/moviesSlice";
import MovieList from "../MovieList/MovieList";

const MoviesCards = () => {
  return (
    <MoviesCardContainer>
      <MovieSuggest>
        <SectionTitle>MOVIES YOU MUST WATCH</SectionTitle>
        <FilterBtn>
          <FilterTxt>FILTERS</FilterTxt>
          <div>
            <DownArrow />
          </div>
        </FilterBtn>
      </MovieSuggest>
      <MovieList />
    </MoviesCardContainer>
  );
};

export default MoviesCards;

const MoviesCardContainer = styled.div`
  margin-top: 44px;
  margin-left: 125px;
  border-radius: 24px;
  background: rgba(11, 15, 22, 0.47);
  box-shadow: 8px -8px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  padding: 12px 0 29px 23px;
  @media screen and (max-width: 1023px) {
    margin-left: 38px;
    backdrop-filter: none;
    border-radius: 0px;
    background: none;
    padding: 0px;
  }
  @media screen and (max-width: 650px) {
    backdrop-filter: none;
    border-radius: 0px;
    background: none;
    padding: 0px;
    margin: 20px 0px 20px 20px;
  }
`;
const MovieSuggest = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
  }
`;
const FilterBtn = styled.div`
  margin-bottom: 17px;
  margin-right: 23px;
  border-radius: 30px;
  background: #5c5c5c;
  display: flex;
  align-items: center;
  padding: 10px 20px 11px 26px;
  @media screen and (max-width: 950px) {
    padding: 5px 20px;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const SectionTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  font-family: Montserrat;
  @media screen and (max-width: 650px) {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
const FilterTxt = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 12px;
  font-family: Montserrat;
`;
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 42px;
  overflow-x: hidden;
`;
