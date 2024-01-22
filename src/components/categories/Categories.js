import React from "react";
import CategoriesCircle from "./CategoriesCircle";
import classes from "./Categories.module.css";
import { Link } from 'react-router-dom';

const Categories = (props) => {

  const categoryName = Object.keys(props.data)[3];
  const category = Object.values(props.data)[3];
  const categoryID = Object.values(props.data)[2];
  const imgURL = category[0].img[0][1]
  // console.log(category[0].img[0][1]);


  return (
    <Link to={`/categories/${categoryName}/${categoryID}`} className={classes.wraper}>
      <div>
        <div>
          <CategoriesCircle
            url={imgURL}
          />
          <div className={classes.text}>
          <h3 className={classes.name}>{categoryName.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
