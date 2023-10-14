"use client";
import styles from "./page.module.css";
import Navbar from "@/Components/SharedFile/Navbar/Navbar";
import MovieInfo from "@/Components/Pages/Home/MovieInfo/MovieInfo";
import RecomendedMovies from "@/Components/Pages/Home/RecomendedMovies/RecomendedMovies";
import Bollywood from "@/Components/Pages/Home/Bollywood/Bollywood";
import MoviesCards from "@/Components/Pages/Home/MoviesCards/MoviesCards";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Navbar />
        <MovieInfo />
        <MoviesCards />
      </main>
      <RecomendedMovies />
      <Bollywood />
    </div>
  );
}
