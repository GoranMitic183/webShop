import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './NavigationDiv.module.css'

const NavigationDiv = ({text,icon}) => {
  return (
    <div className={classes.navigation}>
        <FontAwesomeIcon icon={icon} className={classes.icon}></FontAwesomeIcon>
        <p className={classes.text}>{text}</p>
    </div>
  )
}

export default NavigationDiv