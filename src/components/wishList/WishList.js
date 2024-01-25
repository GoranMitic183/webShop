import React from 'react'
import { useSelector } from 'react-redux'
import MainCard from '../mainCard/MainCard';
import classes from './WishList.module.css'
import { useNavigate } from 'react-router-dom';

export const WishList = () => {

    const { wishList } = useSelector((state) => ({ ...state.wishList }));
    const navigate = useNavigate();


const navigateShop = () => {
  navigate("/")
}

    const empty = <div>
      <h2 style={{textAlign: "center"}}>
        No products in Wish List
      </h2>
      <p>
        With more products you have better sugestions
      </p>
      <div onClick={navigateShop} className={classes.btn}>
        Start shoping
      </div>
    </div>

  return (
    <>
    <div className={classes.empty}>
    {wishList.length === 0 && empty}
    </div>
    <div className={classes.wraper}>
        {wishList.map((product)=>{
            return (
                <MainCard  product={product} key={product._id}/>
            )
        })}
    </div>
    </>
    
  )
}
