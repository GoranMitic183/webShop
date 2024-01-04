import React from "react";
import CategoriesCircle from "./CategoriesCircle";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <div>
      <div>
        <h2>CATEGORIES</h2>
      </div>
      <div className={classes.categoriesWraper}>
        <div className={classes.wraper}>
          <CategoriesCircle
            url="https://media.boohoo.com/i/boohoo/amm07233_black_xl/male-black-man-active-performance-muscle-fit-raglan-tee/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
            text="Men's"
          />
          <div className={classes.text}>
          <h3>Men's</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
