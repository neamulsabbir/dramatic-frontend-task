"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import MovieList from "../MovieList/MovieList";

const Bollywood = () => {
  return (
    <div>
      <BollywoodSection>
        <Title>BOLLYWOOD CLASSICS</Title>
        <MovieList />
      </BollywoodSection>
      <div></div>
    </div>
  );
};
export default Bollywood;

const BollywoodSection = styled.div`
  margin-left: 150px;
  margin-top: 21px;
`;
const Title = styled.h2`
  margin-bottom: 21px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
