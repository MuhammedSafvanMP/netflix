import React from 'react'
import Header from '../components/Header/Header'
import Movie from '../components/Movie/Movie'
import { trending, Popular, originals, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries } from '../components/geners/Geners'


export default function Home() {
  return (
    <>
        <Header url={Popular}  />
        <Movie  title= "Popular on Netflix" url={Popular && Popular} />
        <Movie  title= "Trending" url={trending && trending} isSmall />
        <Movie  title= "Originals" url={originals && originals} isSmall />
        <Movie  title= "Action Movies" url={ActionMovies && ActionMovies} isSmall />
        <Movie  title= "Comedy Movies" url={ComedyMovies && ComedyMovies} isSmall />
        <Movie  title= "Horror Movies" url={HorrorMovies && HorrorMovies} isSmall />
        <Movie  title= "Romance Movies" url={RomanceMovies && RomanceMovies} isSmall />
        <Movie  title= "Documentaries" url={Documentaries && Documentaries} isSmall />
    </>
  )
}
