import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./MainCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWishList, removeWishList } from "../../redux/features/wishSlice";
import { useState } from "react";
import ShopModal from "../shop/shopModal/ShopModal";
import { setProduct } from "../../redux/features/shopSlice";

const MainCard = ({ product }) => {
  const dispatch = useDispatch();
  const modal = useRef();

  const [isAdded, setIsAdded] = useState(false);

  function handleLike() {
    dispatch(setWishList(product));
    setIsAdded(!isAdded);
  }

  function handleRemoveLike(id) {
    setIsAdded(!isAdded);
    dispatch(removeWishList(id));
  }

  const handleShop = (product) => {
    if(product.velicina){
      modal.current.open();
    }else{
      let data = {...product,kolicina: 1}
      dispatch(setProduct(data))
    }
  };

  return (
    <div className={classes.card}>
      <ShopModal ref={modal} product={product}/>
      <Link
        to={`/product/${product._id}`}
        className={classes.wraper}
        data={product}
      >
        <img
          src={Object.values(product.img)[0][1]}
          alt="slika"
          className={classes.cover}
        ></img>
        <div className={classes.text}>
          <h2>{product.productName}</h2>
          <h3>{product.type}</h3>
          {product.weight && <p>{product.weight + " g"}</p>}
          <p>{product.price + " RSD"}</p>
        </div>
      </Link>

      <div className={classes.icons}>
        <div
          className={classes.like}
          onClick={!isAdded ? handleLike : () => handleRemoveLike(product._id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className={classes.shop} onClick={()=>handleShop(product)}>
          <FontAwesomeIcon icon={faBagShopping} inverse />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
