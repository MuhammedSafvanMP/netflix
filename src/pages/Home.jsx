import React from 'react'
import Header from '../components/Header/Header'
import Movie from '../components/Movie/Movie'
import { trending,tvshowTopRated,tvshowOnthair ,  Popular, originals, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries, malayalam } from '../components/geners/Geners'


export default function Home() {
  return (
    <>
        <Header url={Popular}  />
        <Movie  title= "Popular on Netflix" url={Popular && Popular} />
        <Movie  title= "Tv Shows Top Rated" url={tvshowTopRated && tvshowTopRated} isSmall />
        <Movie  title= "Tv Shows Trending" url={tvshowOnthair && tvshowOnthair} isSmall />
        <Movie  title= "Trending" url={trending && trending} isSmall />
        <Movie  title= "Originals" url={originals && originals} isSmall />
        <Movie  title= "Action Movies" url={ActionMovies && ActionMovies} isSmall />
        <Movie  title= "Comedy Movies" url={ComedyMovies && ComedyMovies} isSmall />
        <Movie  title= "Horror Movies" url={HorrorMovies && HorrorMovies} isSmall />
        <Movie  title= "Romance Movies" url={RomanceMovies && RomanceMovies} isSmall />
        <Movie  title= "Documentaries" url={Documentaries && Documentaries} isSmall />
        <Movie  title= "Malayalam" url={malayalam && malayalam} isSmall />


    </>
  )
}
