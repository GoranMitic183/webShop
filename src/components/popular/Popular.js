import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./Popular.module.css";
import MainCard from "../mainCard/MainCard";

const Popular = () => {

  const data = useLoaderData();
  const carousel = useRef();

  let [width, setWidth] = useState(0);
  const [popularProducts, setPopularProducts] = useState([]);


  window.addEventListener("resize", ()=> {
    const offSet =  document.getElementById("root").offsetWidth;
    setWidth(offSet)
  });

  const averageProducts = data.products.filter((product) => {
    const averageRating =
      product.rate.reduce((acc, current) => acc + current.stars, 0) /
      product.rate.length;
    return averageRating > 4.5;
  });

  const averageCategories = data.categories
    .map((product) =>
      Object.values(product)[4].filter((item) => {
        const averageRating =
          item.rate.reduce((acc, current) => acc + current.stars, 0) /
          item.rate.length;
        return averageRating > 4.5;
      })
    )
    .flat();

  useEffect(() => {
    setPopularProducts([...averageCategories, ...averageProducts]);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);

  return (
    <div className={classes.wraper}>
      <h2>POPULAR</h2>
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={classes.productsWraper}
      >
        {popularProducts.map((index) => {
          return (
            <motion.div className={classes.mainWrapper}>
              <MainCard key={index} product={index} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Popular;
