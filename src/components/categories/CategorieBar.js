import React from 'react'
import CategoriesCircle from './CategoriesCircle'
import classes from './CategorieBar.module.css'

const CategorieBar = ({url}) => {
  return (
        <div className={classes.wraper}>
        <div className={classes.text}>
        <h2>Men's</h2>
        </div>
        <div className={classes.circle}>
            <CategoriesCircle url={'https://t3.ftcdn.net/jpg/01/75/28/80/360_F_175288014_3NkoGQr8OwuRfBwhznQIqPVeuDAsxzuq.jpg'}/>
        </div>
    </div>    
  )
}

export default CategorieBar