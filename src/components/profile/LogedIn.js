import React from 'react'
// import classes from './LogedIn.module.css';

const LogedIn = () => {

    const data = JSON.parse(localStorage.getItem("token"))
    console.log(data);
  return (
    <div>
        <div>
            <div>
                <div>{data.user.email}</div>
                <h3>mail</h3>
            </div>
            <div>
                <div>Shopping history</div>
                <div>Contact us</div>
                <div>Delete account</div>
                <div>Log out</div>

            </div>
        </div>
    </div>
  )
}

export default LogedIn