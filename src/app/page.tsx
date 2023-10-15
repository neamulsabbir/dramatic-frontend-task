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
import ShowMoreBtn from "@/Components/SharedFile/ShowMoreBtn/ShowMoreBtn";

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
        <ShowMoreBtn />
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
