import React from "react";
import classes from './ProductDetails.module.css'

const ProductDetails = () => {
  return (
    <div className={classes.wraper}>
      <div>
        <img src="" alt=""></img>
      </div>

      <div>
        <div>
          <h2>Active Pharma Creatine</h2>
          <p>3.499 RSD</p>
        </div>
        <div>
          <p>text</p>
        </div>
      </div>

      <div>
        <div>
          <p>Ratings and comentars</p>
          <p>No comments for now</p>
        </div>
        <div>
          <btn>Oceni</btn>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
