import React from "react";
import SearchBar from "./SearchBar";
import CategorieBar from "./CategorieBar";
import classes from "./CategoriePage.module.css";
import { useSelector } from "react-redux";

const CategoriePage = () => {
  
  const { category } = useSelector((state) => ({ ...state.category }));

  return (
    <div className={classes.wraper}>
      <SearchBar />
      {category &&
        category.map((category) => {
          return <CategorieBar data={category}/>;
        })}
    </div>
  );
};

export default CategoriePage;
