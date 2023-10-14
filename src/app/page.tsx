"use client"
import MoviesCards from '@/Components/SharedFile/MoviesCards/MoviesCards'
import styles from './page.module.css'
import MovieInfo from "@/Components/MovieInfo/MovieInfo"
import Navbar from '@/Components/SharedFile/Navbar/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <MovieInfo />
      <MoviesCards />
    </main>
  )
}
