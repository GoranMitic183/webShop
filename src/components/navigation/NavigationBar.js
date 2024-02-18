import React from 'react'
import classes from "./NavigationBar.module.css"
import { faHouse, faList, faHeart, faBagShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import NavigationDiv from './NavigationDiv'
import NavigationAdded from './NavigationAdded'
import NavigationShop from './NavigationShop'

const NavigationBar = () => {
  return (
    <div className={classes.navigation}>
          <NavigationDiv icon={faHouse} text="Home"/>
          <NavigationDiv icon={faList} text="Categories"/>
          <NavigationAdded icon={faHeart} text="Added"/>
          <NavigationShop icon={faBagShopping} text="Shop"/>
          <NavigationDiv icon={faUser} text="Profile"/>
    </div>
  )
}

export default NavigationBar