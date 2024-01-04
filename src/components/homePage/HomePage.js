import React from 'react'
import Latest from '../latest/Latest'
import Categories from '../categories/Categories'
import ProductDetails from '../product/ProductDetails'

const HomePage = () => {
  return (
    <div>
        <Latest />
        <Categories />
        <ProductDetails />
    </div>
  )
}

export default HomePage