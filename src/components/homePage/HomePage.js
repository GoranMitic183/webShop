import React from "react";
import Latest from "../latest/Latest";
import Categories from "../categories/Categories";
import Sliders from "../slider/Sliders";
import * as API from "../../API/api";
import { useLoaderData } from "react-router-dom";
import { setProducts } from "../../redux/features/productsSlice";
import { useDispatch } from "react-redux";
import { categoryData } from "../../redux/features/categorySlice";
import classes from './HomePage.module.css';

const HomePage = () => {

  const data = useLoaderData();
  console.log(data);

  const dispatch = useDispatch();
  dispatch(setProducts(data.products));
  dispatch(categoryData(data.categories))

  return (
    <div>
      <Latest />
      <div>
        <h2>CATEGORIES</h2>
      </div>
      <div className={classes.wraper}>
      {data.categories.map((category) => {
        return(
     <Categories data={category} key={category._id}/>
        )
      })}
      </div>
      
      <Sliders />
    </div>
  );
};

export default HomePage;

export async function loader() {
  try {
    const [products, categories] = await Promise.all([
      API.getProducts(),
      API.getCategoriesData(),
    ]);

    return {
      products,
      categories
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
