import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './NavigationDiv.module.css'
import { Link } from 'react-router-dom'

const NavigationDiv = ({text,icon}) => {

  return (
    <Link to={text.toLowerCase() === 'home' ? '/' : `${text.toLowerCase()}` } className={classes.navigation}>
        <FontAwesomeIcon icon={icon} className={classes.icon} size='2x' color='gray'></FontAwesomeIcon>
        <p className={classes.text}>{text}</p>
    </Link>
  )
}

export default NavigationDiv