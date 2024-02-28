import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Baner.module.css'

const Baner = () => {
  return (
    <div className={classes.wrapper}>
        <Link to="categories/food/65dee5f4e0e5c2b0ffe79269" style={{position: "relative"}}>
            <img className={classes.pic} src='https://www.justfit.lk/wp-content/uploads/2021/02/bodybuilding-supplements-1.png' alt='pic'>   
            </img>
            <div className={classes.text}>
                    <p style={{color: "white", fontSize: "2rem", fontWeight: "bold", marginBottom: ".2rem"}}>New</p>
                    <p style={{color: "white", fontSize: "3rem", fontWeight: "bolder", marginTop: ".2rem"}}>Gymser food</p>
                </div>
        </Link>
    </div>
  )
}

export default Baner