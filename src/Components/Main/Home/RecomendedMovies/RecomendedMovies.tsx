"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import MovieList from "../MovieList/MovieList";

const RecomendedMovies = () => {
  return (
    <RecomendedContainer>
      <Title>RECOMMENDED FOR YOU</Title>
      <BtnSection>
        <Button>Hindi</Button>
        <Button>Bengali</Button>
        <Button>Marathi</Button>
        <Button>Assamese</Button>
        <Button>Telugu</Button>
        <Button>Tamil</Button>
        <Button>Malayalam</Button>
      </BtnSection>
      <MovieList />
    </RecomendedContainer>
  );
};
export default RecomendedMovies;

const RecomendedContainer = styled.div`
  margin-top: 19px;
  margin-left: 150px;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  font-family: Montserrat;
`;
const BtnSection = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.div`
  border-radius: 30px;
  background: #5c5c5c;
  padding: 10px 30px 11px 31px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 26px;
  margin-top: 19px;
  margin-bottom: 22px;
  font-family: Montserrat;
`;
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 42px;
  overflow-x: hidden;
`;
