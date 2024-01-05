import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faTag } from '@fortawesome/free-solid-svg-icons'
import classes from './Slider.module.css'

const Slider = () => {
  return (
    <div className={classes.mainWraper}>
<div className={classes.wraper}>
        <img src='https://proteinbar.rs/wp-content/uploads/2021/06/malina.webp' alt='pictures' className={classes.cover}></img>
        <div className={classes.price}>
            <p className={classes.discountPrice}>4.599 RSD</p>
            <p className={classes.actualPrice}>3.999 RSD</p>
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