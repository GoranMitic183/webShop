import React, { useState } from "react";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import classes from "./Sliders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Sliders = () => {
  const data = useLoaderData();
  let group = [];

  data.categories.forEach((category) => {
    const categoryGroups = Object.values(category)[3];
    const discountedGroups = categoryGroups.filter(
      (group) => group.discount > 0
    );
    group = group.concat(discountedGroups);
  });

  let [groupIndex, setGroupIndex] = useState(0);

  console.log(group);

  function handleRight() {
    if (groupIndex > group.length - 1) {
      setGroupIndex(0);
    } else {
      setGroupIndex(groupIndex++);
    }
  }

  function handleLeft() {
    if (groupIndex < 0) {
      setGroupIndex(group.length - 1);
    } else {
      setGroupIndex(groupIndex--);
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.rightArrow} onClick={handleRight}>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </div>
      <Slider data={group[`${groupIndex}`]} />
      <div className={classes.leftArrow} onClick={handleLeft}>
        <FontAwesomeIcon icon={faArrowLeft} size="1x" />
      </div>
    </div>
  );
};

export default Sliders;
