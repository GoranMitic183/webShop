import React from "react";
import classes from "./CategoriesCircle.module.css";

const CategoriesCircle = ({url}) => {
  return (
      <div className={classes.wraper}>
        <img
          src={url}
          alt="slika"
          className={classes.photo}
        ></img>
      </div>
  );
};

export default CategoriesCircle;
