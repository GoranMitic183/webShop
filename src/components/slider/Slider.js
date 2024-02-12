import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faTag } from '@fortawesome/free-solid-svg-icons'
import classes from './Slider.module.css'
import { Link } from 'react-router-dom'
import ShopModal from '../shop/shopModal/ShopModal'
import { setProduct } from "../../redux/features/shopSlice";
import { useDispatch } from "react-redux";

const Slider = ({data}) => {

  let discount = data.price - (data.price/ (100/data.discount));
  const modal = useRef();
  const dispatch = useDispatch();

  const handleShop = (product) => {
    if(product.velicina){
      modal.current.open();
    }else{
      let data = {...product,kolicina: 1}
      dispatch(setProduct(data))
    }
  };
  
  return (
    <div className={classes.mainWraper}>

      {/* <Link
        to={`/product/${data._id}`}
        className={classes.wraper}
        data={data}
      > */}
<div className={classes.wraper}>
<Link
        to={`/product/${data._id}`}
        // className={classes.wraper}
        data={data}
      >
        <img src={data.img[0][1]} alt='pictures' className={classes.cover}></img>
        </Link>
        <div className={classes.price}>
            <p className={classes.discountPrice}>{data.price + " RSD"}</p>
            <p className={classes.actualPrice}>{discount + " RSD"}</p>
        </div>
        <div className={classes.tag}>
            <FontAwesomeIcon icon={faTag} size='3x' color='red'/>
        </div>
        <div className={classes.bag} onClick={()=>handleShop(data)}>
            <FontAwesomeIcon icon={faBagShopping} inverse/>
        </div>
        </div>
        <ShopModal ref={modal} product={data}/>

    {/* </Link> */}
    </div>
    
  )
}

export default Slider