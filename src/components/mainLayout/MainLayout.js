import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import { Footer } from '../navigation/Footer'
// import classes from "./MainLayout.module.css"

const MainLayout = () => {
  return (
    <>
        <Header />
        {/* <div className={classes.wraper}> */}
        <Outlet />
        {/* </div>     */}
        <Footer />
    </>
  )
}

export default MainLayout