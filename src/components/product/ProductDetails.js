import React from "react"
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

const handleBack = () => {
  navigate(-1)
}

  return (
    <div className={classes.wraper}>
      <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div className={classes.pictureWrap}>
        <img src={product.img} alt="pictures" className={classes.picture}></img>
      </div>

      <div className={classes.slider}>
      <div className={classes.slidePicWrap}>
        <img src="https://fitlab.rs/wp-content/uploads/2022/09/gold-standard-whey-fitlab-suplementi.jpg" alt="" className={classes.slidePic}></img>
      </div>
      </div>
      
      <div className={classes.text}>
      <div>
        <div>
          <h2>{product.productName +" " + product.type}</h2>
          <p>{product.price + " RSD"}</p>
        </div>
        <div>
          <p>{product.description}</p>
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
