"use client"
import styles from './page.module.css'
import MovieInfo from "@/Components/MovieInfo/MovieInfo"

export default function Home() {
  return (
    <main className={styles.main}>
      <MovieInfo />
    </main>
  )
}
