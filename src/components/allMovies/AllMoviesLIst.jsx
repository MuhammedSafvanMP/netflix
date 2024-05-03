import React from 'react'
import AllMovies from './AllMovies'
import { Popular, now_playing,  trending, upcoming } from '../geners/Geners'
import Navbar from '../Navbar/Navbar'

export default function AllMoviesLIst() {
  return (
    <>
        <Navbar />
        <AllMovies movie= {now_playing} name ={"Now Playing"} />
        <AllMovies movie= {Popular} name ={"Popular"} />
        <AllMovies movie= {trending} name ={"Trending"} />
        <AllMovies movie= {upcoming} name ={"Upcoming"} />

    </>
  )
}
