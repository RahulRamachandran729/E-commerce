import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero'
import Categories from '../components/Route/Categories'
import BestDeals from '../components/Route/BestDeals'
import FeaturedProduct from '../components/Route/FeaturedProducts/FeaturedProduct'
import Events from '../components/Events/Events'

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero/>
        <Categories/>
        <BestDeals/>
        <Events/>
        <FeaturedProduct/>
        
    </div>
  )
}

export default HomePage