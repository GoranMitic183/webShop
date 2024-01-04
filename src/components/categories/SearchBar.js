import React from 'react'
import classes from './SearchBar.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className={classes.wraper}>
        <input placeholder='Search' className={classes.search}/>
        {/* <div className={classes.icon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} inverse></FontAwesomeIcon>
        </div> */}
    </div>
  )
}

export default SearchBar