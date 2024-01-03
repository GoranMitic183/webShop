import React from "react";
import classes from "./CategoriesCircle.module.css";

const CategoriesCircle = ({url,text}) => {
  return (
    <div className={classes.circle}>
      <div className={classes.wraper}>
        <img
          src={url}
          alt="slika"
          className={classes.photo}
        ></img>
      </div>
      <h3 className={classes.text}>{text}</h3>
    </div>
  );
};

export default CategoriesCircle;
