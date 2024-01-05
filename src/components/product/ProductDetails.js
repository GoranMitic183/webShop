import React from "react";
import classes from './ProductDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {

const navigate = useNavigate();

const handleBack = () => {
  navigate(-1)
}

  return (
    <div className={classes.wraper}>
      <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div className={classes.pictureWrap}>
        <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71QDGZq3BJL._AC_UF1000,1000_QL80_.jpg" alt="pictures" className={classes.picture}></img>
      </div>

      <div className={classes.slider}>
      <div className={classes.slidePicWrap}>
        <img src="https://fitlab.rs/wp-content/uploads/2022/09/gold-standard-whey-fitlab-suplementi.jpg" alt="" className={classes.slidePic}></img>
      </div>
      </div>
      
      <div className={classes.text}>
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
          <btn>Rate</btn>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
