import Slider  from '../components/Slider'
import React from 'react'
import Annoucement from '../components/Annoucement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
//import Product from '../components/Product'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
