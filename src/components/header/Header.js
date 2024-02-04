import React from 'react'
import classes from './Header.module.css'
import { useLocation } from 'react-router-dom'


const Header = () => {

  const location = useLocation();
  let text = '';
  let style = "text";

  switch(location.pathname) {
    case "/":
      text = "GYMSTER";
      break;

    case "/added":
      text = "Wish List";
      style = "head"
      break;

      case "/shop":
        text = "Shop";
        style = "head"

        break;

        case "/profile":
          text = "Profile";
          style = "head"

          break;

      default: 
      text = "GYMSTER";
      style = "text"
      break;

  }

  return (
    <header className={classes.header}>
      <h1 className={`${classes[style]}`}>{text}</h1>
    </header>
  )
}

export default Header