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
    </div>
  );
};
export default Bollywood;

const BollywoodSection = styled.div`
  margin-left: 150px;
  margin-top: 21px;
  @media screen and (max-width: 1023px) {
    margin-left: 38px;
  }
  @media screen and (max-width: 650px) {
    margin: 20px 0px 20px 20px;
  }
`;
const Title = styled.h2`
  margin-bottom: 21px;
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
