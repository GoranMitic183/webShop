import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faTag } from '@fortawesome/free-solid-svg-icons'
import classes from './Slider.module.css'

const Slider = ({data}) => {

  let discount = data.price - (data.price/ (100/data.discount))
console.log(data);
  return (
    <div className={classes.mainWraper}>
<div className={classes.wraper}>
        <img src={data.img[0][1]} alt='pictures' className={classes.cover}></img>
        <div className={classes.price}>
            <p className={classes.discountPrice}>{data.price + " RSD"}</p>
            <p className={classes.actualPrice}>{discount + " RSD"}</p>
        </div>
        <div className={classes.tag}>
            <FontAwesomeIcon icon={faTag} />
        </div>
        <div className={classes.bag}>
            <FontAwesomeIcon icon={faBagShopping} inverse/>
        </div>
    </div>
    </div>
    
  )
}

export default Slider