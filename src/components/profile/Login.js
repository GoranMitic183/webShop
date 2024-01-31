import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

const Login = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => ({ ...state.auth }));


    function handleNavigateRegister() {
        navigate("/register")
    }

    function handleBack() {
        navigate(-1);
    }

    function handleLogin(event) {
        event.preventDefault();
    const formData = new FormData(event.target);
    // const userName = formData.get('username');
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    if(data) {
      dispatch(login({data, navigate, toast}))
    }
    }

  return (
    <div className={classes.wraper}>
        <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div>
        <h1>GYMSTER</h1>
        <div>
          <form onSubmit={handleLogin}>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input placeholder="Email" name="email" className={classes.field}></input>
            </div>

            <div>
              <FontAwesomeIcon icon={faLock} />
              <input placeholder="Password" name="password" className={classes.field}></input>
            </div>
            <h4>Forgot password?</h4>

            <button type="submit">Log in</button>
          </form>
        </div>

        <p>Don't have an account yet?</p>
        <h4 onClick={handleNavigateRegister} style={{cursor: "pointer"}}>Create account</h4>
      </div>
    </div>
  )
}

export default Login