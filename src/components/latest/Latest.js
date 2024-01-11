import React from "react";
import MainCard from "../mainCard/MainCard";
import classes from "./Latest.module.css";

const Latest = (props) => {

  const products = props.products;
  console.log(props.products);

  return (
    <div className={classes.wraper}>
      <h2>LATEST</h2>
      <div className={classes.productsWraper}>
      {products.map((product) => {
        return (
          <MainCard key={product._id} product={product}/>
        )
      })}
      </div>
     
    </div>
  );
};

export default Latest;
