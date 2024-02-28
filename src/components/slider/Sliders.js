import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import classes from "./Sliders.module.css";

const Sliders = () => {
  const data = useLoaderData();
  console.log(data);
  let group = [];

  data.categories.forEach((category) => {
    const categoryGroups = Object.values(category)[4];

    console.log(categoryGroups);
    const discountedGroups = categoryGroups.filter(
      (group) => group.discount > 0
    );
    group = group.concat(discountedGroups);
  });

  let [groupIndex, setGroupIndex] = useState(0);

  console.log(group);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prevIndex) => (prevIndex + 1) % group.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [group.length]);

  function handleCarousel(index) {
    setGroupIndex(index);
  }

  return (
    <div className={classes.wrapper}>
      <Slider data={group[`${groupIndex}`]} />
      <div className={classes.dotWrapper}>
        {group &&
          group.map((item, index) => {
            return (
              <div
                className={
                  index === groupIndex ? classes.dotActive : classes.dot
                }
                onClick={() => handleCarousel(index)}
                key={index}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default Sliders;
