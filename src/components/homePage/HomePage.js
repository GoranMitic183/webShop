import React, { useRef, useState, useEffect} from "react";
import Latest from "../latest/Latest";
import Categories from "../categories/Categories";
import Sliders from "../slider/Sliders";
import * as API from "../../API/api";
import { useLoaderData } from "react-router-dom";
import { setProducts } from "../../redux/features/productsSlice";
import { useDispatch } from "react-redux";
import { categoryData } from "../../redux/features/categorySlice";
import classes from "./HomePage.module.css";
import Baner from "../baner/Baner";
import Colection from "../baner/Colection";
import { motion } from "framer-motion"; 
import Popular from "../popular/Popular";

const HomePage = () => {
  const data = useLoaderData();

  const dispatch = useDispatch();
  dispatch(setProducts(data.products));
  dispatch(categoryData(data.categories));

  const carousel = useRef();
  let [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div className={classes.latestDiv}>
      <Latest />
      </div>
      <div className={classes.titleDiv} style={{ margin: "0 1rem"}}>
        <h2>CATEGORIES</h2>
      </div>
      <motion.div ref={carousel} drag="x" dragConstraints={{right: 0, left: -width}} className={classes.wraper}>
        {data.categories.map((category) => {
          return <Categories data={category} key={category._id} />;
        })}
      </motion.div>
      <div className={classes.sliders}>
      <Sliders />
      </div>
      <Baner />
      <Colection />
      <Popular />
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
      categories,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
