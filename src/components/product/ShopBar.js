import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import classes from "./ShopBar.module.css";
import { useDispatch } from "react-redux";
import { setWishList } from "../../redux/features/wishSlice";
import { setProduct } from "../../redux/features/shopSlice";
import ShopModal from "../shop/shopModal/ShopModal";
import  toast  from "react-hot-toast";

const ShopBar = ({ product }) => {

  console.log(product);
  let token = JSON.parse(localStorage.getItem("token"));


  const dispatch = useDispatch();
  const modal = useRef();

  function handleLike(data) {
    dispatch(setWishList(data));
  }

  const handleShop = (product) => {
    if (product.velicina) {
        modal.current.open();
    } else {
      let data = { ...product, kolicina: 1 };
      if(token){
        dispatch(setProduct({products: data, user: token.user.email}));
      }else {
        toast.error("Login if you want to shop.")
      }
    } 
  };

  return (
    <div className={classes.wrapper}>
      <ShopModal ref={modal} product={product} />
      <div className={classes.container}>
        <FontAwesomeIcon
          icon={faShareNodes}
          className={classes.icon}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={classes.icon}
          size="2x"
          onClick={()=>handleLike(product)}
        />
        <div className={classes.addBtn} onClick={()=>handleShop(product)}>
          Add to chart
        </div>
      </div>
    </div>
  );
};

export default ShopBar;
