import React from "react";
import classes from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { useMutation } from "@tanstack/react-query";
// import { register  as registerAPI } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/authSlice";
import { toast } from "react-toastify";


const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const userName = formData.get('username');
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    if(data) {
      dispatch(register({data, navigate, toast}))
      
    }
    register(data);
  }

  function handleNavigateLogin() {
    navigate("/login")
  }

  function handleBack() {
    navigate(-1);
}


  return (
    <div className={classes.wraper}>
       <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div>
        <h1 style={{textAlign: "center"}}>GYMSTER</h1>
        <div>
          <h2 style={{textAlign: "center"}}>Create account</h2>
          <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <input placeholder="User name" name="username" className={classes.field}></input>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input placeholder="Email" name="email" className={classes.field}></input>
            </div>

            <div>
              <FontAwesomeIcon icon={faLock} />
              <input placeholder="Password" name="password" className={classes.field}></input>
            </div>

            <button type="submit" className={classes.btn}>Create account</button>
          </form>
        </div>

        <p style={{textAlign: "center", color: "gray"}}>Already have account?</p>
        <h4 onClick={handleNavigateLogin} style={{cursor: "pointer", textAlign: "center", fontSize: "large"}}>Log in</h4>
      </div>
    </div>
  );
};

export default Register;
