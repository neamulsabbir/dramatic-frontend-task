"use client";
import MovieInfo from "@/Components/Main/Home/MovieInfo/MovieInfo";
import styles from "./page.module.css";
import Navbar from "@/Components/SharedFile/Navbar/Navbar";
import MoviesCards from "@/Components/Main/Home/MoviesCards/MoviesCards";
import RecomendedMovies from "@/Components/Main/Home/RecomendedMovies/RecomendedMovies";
import Bollywood from "@/Components/Main/Home/Bollywood/Bollywood";
import styled from "styled-components";
import DownArrow from "@/Components/SharedFile/SVGIcon/DownArrow";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Navbar />
        <MovieInfo />
        <MoviesCards />
        <RecomendedMovies />
        <Bollywood />
      </main>
      <ButtonSection>
        <Button href='/movies'>
          <ButtonP>Show More</ButtonP>
          <DownArrow />
        </Button>
      </ButtonSection>
    </div>
  );
}

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 46px;
`;
const Button = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 21.5px;
  background: #5e47a1;
  padding: 11px 18.22px 11px 26px;
`;

const ButtonP = styled.p`
  color: #e3e3e3;
  font-size: 18px;
  font-weight: 700;
  margin-right: 11px;
`;
