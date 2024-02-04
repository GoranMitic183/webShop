import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faArrowRight, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import classes from './Profile.module.css'
import { useNavigate } from 'react-router-dom'
import LogedIn from './LogedIn'
import ShopModal from '../shop/shopModal/ShopModal'
import { useRef } from 'react'

const Profile = () => {

  const modal = useRef();

 const [ isLogedIn, setIsLogedIn ] = useState(false)

  useEffect(()=> {
    const user =  localStorage.getItem("token")
    if(user){
        setIsLogedIn(true);
    }
},[])

    const navigate = useNavigate()

    function handleRegister() {
        navigate("/register")
    }

    function handleLogin() {
      navigate("/login")
    }

    function handleContactUs() {      
      modal.current.open();

    }

  return (
    <div className={classes.wraper}>
 {!isLogedIn && <div >
  <ShopModal ref={modal}/>
        <div style={{textAlign: "center"}}>
            <FontAwesomeIcon icon={faCircleUser} size='5x' />
            <h2>Guest</h2>
            <p>
    Log in to your Gimster account to view your order history</p>
        </div>
        <div className={classes.tasters}>
            <h3 className={classes.btn} onClick={handleLogin}>Log in</h3>
            <h3 className={classes.btn} onClick={handleRegister}>Register</h3>
        </div>
        <div className={classes.field} onClick={handleContactUs}>
            <FontAwesomeIcon icon={faCircleExclamation} className={classes.icon}/>
            Contact us
            <div className={classes.arrow}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
    </div>}
    {isLogedIn && <LogedIn />}

    </div>
   
  )
}

export default Profile