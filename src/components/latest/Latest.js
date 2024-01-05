import React from 'react'
import MainCard from '../mainCard/MainCard'
import classes from './Latest.module.css'

const Latest = () => {
  return (
    <div className={classes.wraper}>
    <h2>LATEST</h2>
    <MainCard />
    </div>
  )
}

export default Latest