import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './Breadcrumbs.module.css'

const Breadcrumbs = () => {

    const location = useLocation();

    console.log(location);

    let currentLink = '';
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        // console.log(crumb);
     const first = crumb.split('')[0].toUpperCase(); 
     const rest = crumb.slice(1);

    const currentPathName = location.pathname.split('/').slice(0,-1).filter(path => path !== '')
    const currentPath = "/" + currentPathName.join('/')

     currentLink+=`/${crumb}`
     const isCurrent = currentLink === currentPath;


        return (
            <div className={classes.crumb} key={crumb} >
                <Link className={isCurrent ? classes.isActiveLink : classes.link} to={isCurrent ? location.pathname : currentLink}>{`${first}${rest}`}</Link>
            </div>
        )
    })


  return (
    <div className={classes.wraper}>
        {crumbs}
    </div>
  )
}

export default Breadcrumbs