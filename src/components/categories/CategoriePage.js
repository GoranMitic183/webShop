import React from 'react'
import SearchBar from './SearchBar'
import CategorieBar from './CategorieBar'
import classes from './CategoriePage.module.css'

const CategoriePage = () => {
  return (
    <div className={classes.wraper}>
    <SearchBar />
    <CategorieBar />
    </div>  
  )
}

export default CategoriePage