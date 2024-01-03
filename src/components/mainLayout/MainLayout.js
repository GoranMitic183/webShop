import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { Footer } from '../Footer'
import classes from "./MainLayout.module.css"

const MainLayout = () => {
  return (
    <>
    <div className={classes.wraper}>
        <Header />
        <Outlet />
        <Footer />
    </div>    
    </>
  )
}

export default MainLayout