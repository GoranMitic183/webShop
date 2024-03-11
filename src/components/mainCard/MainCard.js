import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./MainCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWishList } from "../../redux/features/wishSlice";
import ShopModal from "../shop/shopModal/ShopModal";
import { setProduct } from "../../redux/features/shopSlice";
import toast from "react-hot-toast";

const MainCard = ({ product, id }) => {

  let user = JSON.parse(localStorage.getItem("token"));

  console.log(product);
  let discount;
  if(product.discount > 0){
     discount = (+product.price) - (+product.price/ (100/+product.discount));

  }
  // console.log( (+product.price)-(+product.price/(100/+product.discount)));

  const dispatch = useDispatch();
  const modal = useRef();

  function handleLike(product) {
    dispatch(setWishList(product));
  }

  const handleShop = (product) => {
    if(user){
      if(product.velicina){
        modal.current.open();
      }else{
        let data = {...product,kolicina: 1}
        dispatch(setProduct({products: data,user: user.user.email}))
      }
    }else {
      toast.error("Login if you want to start shoping!")
    }
  };

  return (
    <div className={classes.card}>
      <ShopModal ref={modal} product={product}/>
      <Link
        to={`/product/${product._id}/${id}`}
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
          <div style={{display: "inline-flex" , justifyContent: "center", alignItems: "center"}}>
          {product.discount > 0 && (<p style={{textDecoration: "line-through", fontSize: ".9rem" , marginRight: ".5rem"}}>{product.price > 999 ? product.price.toString()[0] + "." + product.price.toString().slice(1) + " RSD " : product.price + " RSD "}</p>)}         
          {product.discount > 0 ? (<p style={{color: "red"}}>{product.price > 999 ? discount.toString()[0] + "." + discount.toString().slice(1) + " RSD " : discount + " RSD "}</p>) : <p>{product.price > 999 ? product.price.toString()[0] + "." + product.price.toString().slice(1) + " RSD " : product.price + " RSD "}</p>}
          </div>
          
        </div>
      </Link>

      <div className={classes.icons}>
        <div
          className={classes.like}
          onClick={()=> handleLike(product)}
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
