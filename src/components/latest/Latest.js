import React, { useState } from "react";
import MainCard from "../mainCard/MainCard";
import classes from "./Latest.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Latest = () => {
  const { products } = useSelector((state) => ({ ...state.products }));

  let [groupIndex, setGroupIndex] = useState([0, 1]);
  console.log(groupIndex);

  function handleRight() {
    setGroupIndex((prevGroupIndex) => {
      const updatedGroupIndex = prevGroupIndex.map((index) => {
        if (index >= products.length - 2) {
          return index;
        } else {
          return index + 2;
        }
      });
      return updatedGroupIndex;
    });
  }

  function handleLeft() {
    setGroupIndex((prevGroupIndex) => {
      const updatedGroupIndex = prevGroupIndex.map((index) => {
        if (index <= 1) {
          return index;
        } else {
          return index - 2;
        }
      });
      return updatedGroupIndex;
    });
  }

  return (
    <div className={classes.wraper}>
      <h2>LATEST</h2>
      <div className={classes.productsWraper}>
        <div className={classes.leftArrow} onClick={handleLeft}>
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </div>
        {groupIndex.map((index) => {
          return (
            <div className={classes.mainWrapper}>
              <MainCard key={index} product={products[`${index}`]} />
            </div>
          );
        })}
        <div className={classes.rightArrow} onClick={handleRight}>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </div>
      </div>
    </div>
  );
};

export default Latest;
