import React from 'react'
import Newtrending from './New&trending'
import { Popular, trending, tvshowOnthair, tvshowTopRated } from '../geners/Geners'
import Navbar from '../Navbar/Navbar'

export default function NewtrendingList() {
  return (
    <>
    <Navbar />
     <Newtrending movie={tvshowOnthair} name={"On The Air"} />   
     <Newtrending movie={tvshowTopRated} name={"Top Rated"} />   
     <Newtrending movie={trending} name={"Trending"} />   
     <Newtrending movie={Popular} name={"Popular"} />   

    </>
  )
}
