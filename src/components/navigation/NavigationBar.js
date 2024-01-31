import React from 'react'
import classes from "./NavigationBar.module.css"
import { faHouse, faList, faHeart, faBagShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import NavigationDiv from './NavigationDiv'

const NavigationBar = () => {
  return (
    <div className={classes.navigation}>
          <NavigationDiv icon={faHouse} text="Home"/>
          <NavigationDiv icon={faList} text="Categories"/>
          <NavigationDiv icon={faHeart} text="Added"/>
          <NavigationDiv icon={faBagShopping} text="Shop"/>
          <NavigationDiv icon={faUser} text="Profile"/>
    </div>
  )
}

export default NavigationBar