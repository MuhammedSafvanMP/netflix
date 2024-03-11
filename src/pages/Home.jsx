import React from 'react'
import Header from '../components/Header/Header'
import Movie from '../components/Movie/Movie'
import { trending, Popular, action, originals, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries } from '../components/geners/Geners'


export default function Home() {
  return (
    <>
        <Header url={Popular}  />
        <Movie  title= "Popular on Netflix" url={Popular} />
        <Movie  title= "Trending" url={trending} isSmall />
        <Movie  title= "Originals" url={originals} isSmall />
        <Movie  title= "Action" url={action} isSmall />
        <Movie  title= "Comedy Movies" url={ComedyMovies} isSmall />
        <Movie  title= "Horror Movies" url={HorrorMovies} isSmall />
        <Movie  title= "Action Movies" url={ActionMovies} isSmall />
        <Movie  title= "Romance Movies" url={RomanceMovies} isSmall />
        <Movie  title= "Documentaries" url={Documentaries} isSmall />
    </>
  )
}
