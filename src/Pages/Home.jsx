import React from 'react'
import Banner from '../components/Banner'
import CardsData from '../components/CardsData'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
        <Banner />
        <CardsData />
    </div>
  )
}

export default Home