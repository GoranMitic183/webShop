import React from 'react'
import Latest from '../latest/Latest'
import Categories from '../categories/Categories'
import Sliders from '../slider/Sliders'
import * as API from '../../API/api'
import { useLoaderData } from 'react-router-dom'
import { setProducts } from "../../redux/features/productsSlice";
import { useDispatch } from "react-redux"


const HomePage = () => {

  const products = useLoaderData();
  console.log(products);
  const dispatch = useDispatch();
  dispatch(setProducts(products));

  return (
    <div>
        <Latest products={products}/>
        <Categories />
        <Sliders />
    </div>
  )
}

export default HomePage;

export async function loader() {
    try {
      const products = await API.getProducts();

      return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}