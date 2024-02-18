import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import classes from "./ShopBar.module.css";
import { useDispatch } from "react-redux";
import { setWishList } from "../../redux/features/wishSlice";
import { setProduct } from "../../redux/features/shopSlice";
import ShopModal from "../shop/shopModal/ShopModal";

const ShopBar = ({ product }) => {

  console.log(product);

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
      dispatch(setProduct(data));
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
