import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import classes from './Profile.module.css'
import { useNavigate } from 'react-router-dom'
import LogedIn from './LogedIn'


const Profile = () => {

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

  return (
    <div className={classes.wraper}>
 {!isLogedIn && <div >
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
    </div>}
    {isLogedIn && <LogedIn />}

    </div>
   
  )
}

export default Profile