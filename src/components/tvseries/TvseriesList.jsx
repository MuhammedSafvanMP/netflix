import React from 'react'
import Tvseries from './Tvseries'
import { airingToday, tvseriesPopular, tvshowOnthair, tvshowTopRated } from '../geners/Geners'
import Navbar from '../Navbar/Navbar'


export default function TvseriesList() {
  return (
    <>
        <Navbar />
        <Tvseries  name = {"Airing Today"}  tvUrl = {airingToday} />
        <Tvseries  name = {"On The Air"}  tvUrl = {tvshowOnthair} />
        <Tvseries  name = {"Popular"}  tvUrl = {tvseriesPopular } />
        <Tvseries  name = {"Top Rated"}  tvUrl = { tvshowTopRated } />



    </>
  )
}
