import React, { useState } from "react"
import classes from './ProductDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate,useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const ProductDetails = () => {

const navigate = useNavigate();
const { products } = useSelector((state) => (state.products));
const productID = useParams().id;
const product = products.find((product) => product._id === productID);
const [ image, setImage ] = useState(product.img[0][1]);


const handleBack = () => {
  navigate(-1)
}

const handleImage = (url) => {
  setImage(url);
}

  return (
    <div className={classes.wraper}>
      <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div className={classes.pictureWrap}>
        <img src={image} alt="pictures" className={classes.picture}></img>
      </div>

      <div className={classes.slider}>
      <div className={classes.slidePicWrap}>
        {product.img.map((img) => {
          const url = Object.values(img)[0];
          return (
            <img src={url} alt="img" className={classes.detailImg} onClick={() => handleImage(url)}
            key={url}></img>
          )
        })}
      </div>
      </div>
      
      <div>
      <div className={classes.text}>
        <div className={classes.infoWraper}>
          <h2>{product.productName +" " + product.type}<br />{product.weight + "g"}</h2>
          <h1 className={classes.price}>{product.price + " RSD"}</h1>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
      </div>

      <div className={classes.rateing}>
        <div>
          <p>Ratings and comentars</p>
          <p>No comments for now</p>
        </div>
        <div className={classes.btnWraper}>
          <btn className={classes.rateBtn}>Rate</btn>
        </div>
        {/* <div>
          <btn>{product.rating}</btn>
        </div> */}
      </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
