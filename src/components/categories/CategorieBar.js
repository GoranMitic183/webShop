import React from 'react'
import CategoriesCircle from './CategoriesCircle'
import classes from './CategorieBar.module.css'
import { Link } from 'react-router-dom'

const CategorieBar = (props) => {

  const categoryName = Object.keys(props.data)[3];
  const categoryData = Object.values(props.data)[3];
  const categoryID = props.data._id;

  return (
        <Link to={`/categories/${categoryName}/${categoryID}`} className={classes.wraper}>
        <div className={classes.text}>
        <h2>{categoryName.toUpperCase()}</h2>
        </div>
        <div className={classes.circle}>
            <CategoriesCircle url={categoryData[0].img[0][1]}/>
        </div>
    </Link>    
  )
}

export default CategorieBar