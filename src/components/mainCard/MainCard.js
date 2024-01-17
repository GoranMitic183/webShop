import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import classes from './MainCard.module.css'
import { Link } from "react-router-dom";

const MainCard = ({product}) => {
  console.log(Object.values(product.img)[0][1]);

  return (
      <div className={classes.card}>
      <Link to={`/product/${product._id}`} className={classes.wraper}>
        <img src={Object.values(product.img)[0][1]} alt="slika" className={classes.cover}></img>
        <div className={classes.text}>
        <h2>{product.productName}</h2>
        <h3>{product.type}</h3>
        <p>{product.weight + " g"}</p>
        <p>{product.price + " RSD"}</p>
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
