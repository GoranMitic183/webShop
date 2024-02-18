import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './NavigationDiv.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavigationAdded = ({text,icon}) => {

  const { wishList } = useSelector((state) => ({ ...state.wishList }));
//   const { products } = useSelector((state) => ({ ...state.shopData }));

  return (
    <Link to={text.toLowerCase() === 'home' ? '/' : `${text.toLowerCase()}` } className={classes.navigation}>
      <div className={wishList.length === 0 ? "" : classes.num}>{text.toLowerCase() === 'added' && wishList.length > 0 ?  wishList.length : undefined}</div>
        <FontAwesomeIcon icon={icon} className={classes.icon} size='2x' color='gray'></FontAwesomeIcon>
        <p className={classes.text}>{text}</p>
    </Link>
  )
}

export default NavigationAdded