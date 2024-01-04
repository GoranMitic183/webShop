import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import classes from './MainCard.module.css'
import { Link } from "react-router-dom";

const MainCard = ({id}) => {
  return (
    <div className={classes.card}>
      <Link to={'/product'} className={classes.wraper}>
        <img src="https://www.titaniumsport.rs/wp-content/uploads/2019/03/Gold-Standard-100-Whey-2.27kg-Double-Rich-Chocolate-1.jpg" alt="slika" className={classes.cover}></img>
        <div className={classes.text}>
        <h2>Active Pharma</h2>
        <h3>Protein</h3>
        <p>3.999 RSD</p>
        </div>
      </Link>

      <div className={classes.icons}>
        <div className={classes.like}>
          <FontAwesomeIcon icon={faHeart}  />
        </div>
        <div className={classes.shop}>
          <FontAwesomeIcon icon={faBagShopping} inverse />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
