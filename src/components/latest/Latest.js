import React, { useState, useRef, useEffect } from "react";
import MainCard from "../mainCard/MainCard";
import classes from "./Latest.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Latest = () => {
  const { products } = useSelector((state) => ({ ...state.products }));

  const carousel = useRef();
  let [width, setWidth] = useState(0);

  window.addEventListener("resize", ()=> {
    const offSet =  document.getElementById("root").offsetWidth;
    setWidth(offSet)
  });

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [width]);

  return (
    <div className={classes.wraper}>
      <h2>LATEST</h2>
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={classes.productsWraper}
      >
        {products.map((index) => {
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

export default Latest;
