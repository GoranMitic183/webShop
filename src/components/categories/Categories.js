import React from "react";
import CategoriesCircle from "./CategoriesCircle";
import classes from "./Categories.module.css";

const Categories = (props) => {

  const categoryName = Object.keys(props.data)[3];
  const category = Object.values(props.data)[3];
  console.log(category);

  return (
    <div className={classes.wraper}>
      {/* <div>
        <h2>CATEGORIES</h2>
      </div> */}
      <div>
        <div>
          <CategoriesCircle
            url="https://media.boohoo.com/i/boohoo/amm07233_black_xl/male-black-man-active-performance-muscle-fit-raglan-tee/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
            text="Men's"
          />
          <div className={classes.text}>
          <h3>{categoryName.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
