import React from 'react'
import CategoriesCircle from './CategoriesCircle'
import classes from './CategorieBar.module.css'

const CategorieBar = (props) => {

  const categoryName = Object.keys(props.data)[3];
  const categoryData = Object.values(props.data)[3];

  return (
        <div className={classes.wraper}>
        <div className={classes.text}>
        <h2>{categoryName.toUpperCase()}</h2>
        </div>
        <div className={classes.circle}>
            <CategoriesCircle url={categoryData[0].img[0][1]}/>
        </div>
    </div>    
  )
}

export default CategorieBar