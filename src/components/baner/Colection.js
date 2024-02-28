import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Colection.module.css'

const Colection = () => {
  return (
    <div className={classes.wrapper}>
    <Link to="/categories/men/65dee5f4e0e5c2b0ffe79266" style={{position: "relative"}}>
        <img className={classes.pic} src='https://gymster.rs/wp-content/uploads/2021/12/Gymster-Featured-image.png' alt='pic'>   
        </img>
        {/* <div className={classes.text}>
                <p style={{color: "black", fontSize: "3rem", fontWeight: "bolder", marginBottom: ".2rem"}}>EVERYDAY 2.0</p>
                <p style={{color: "black", fontSize: "1rem", marginTop: ".2rem"}}>JESEN/ZIMA 2023/2024</p>
            </div> */}
    </Link>
</div>
  )
}

export default Colection