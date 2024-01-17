import React, { useEffect } from "react";
import Latest from "../latest/Latest";
import Categories from "../categories/Categories";
import Sliders from "../slider/Sliders";
import * as API from "../../API/api";
import { useLoaderData } from "react-router-dom";
import { setProducts } from "../../redux/features/productsSlice";
import { useDispatch } from "react-redux";
import { categoryData } from "../../redux/features/categorySlice";
import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useLoaderData();
  const dispatch = useDispatch();

  dispatch(setProducts(products));

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await API.getCategoriesData();
        console.log(categories);
        dispatch(categoryData(categories.data));
      } catch (error) {
        throw error;
      }
    };
    fetchCategories();
  },[]);

  const { category } = useSelector((state) => ({ ...state.category }));
  console.log(category);

  return (
    <div>
      <Latest />
      <div>
        <h2>CATEGORIES</h2>
      </div>
      {category.map((list) => {
        return(
     <Categories data={list}/>
        )
      })}
      <Sliders />
    </div>
  );
};

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
