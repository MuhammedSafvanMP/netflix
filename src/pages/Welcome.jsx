import React from 'react'
import Nav from '../welcome/Nav/Nav';
import Header from '../welcome/Header/Header';
import Shows from '../welcome/Shows/Shows';
import Offline from '../welcome/Offline/Offline';
import Watch from '../welcome/Watch/Watch';
import Kids from '../welcome/Kids/Kids';


export default function Welcome() {
  return (
    <>
    <Nav />
    <Header />
    <Shows />
    <Offline />
    <Watch />
    <Kids />
    </>
  )
}
