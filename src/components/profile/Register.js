import React, { useState } from "react";
import classes from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/features/authSlice";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorInput, setErrorInput] = useState({});

  const regex = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const userName = formData.get('username');
    const data = Object.fromEntries(formData.entries());
    console.log(data.email);

    if (data && regex.test(data.email)) {
      if (data.username.length > 8) {
        dispatch(register({ data, navigate, toast }));
      } else {
        setErrorInput({ username: "Username is too short." });
      }
    } else {
      if(data.username.length > 8){
        setErrorInput({ email: "Invalid email adress." });
      }else {
        setErrorInput({ email: "Invalid email adress.", username: "Username is too short." });
      }
    }
    register(data);
  }

  function handleNavigateLogin() {
    navigate("/login");
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
        <h1 style={{ textAlign: "center" }}>GYMSTER</h1>
        <div>
          <h2 style={{ textAlign: "center" }}>Create account</h2>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <input
                placeholder="User name"
                name="username"
                className={classes.field}
              ></input>
              <p style={{ color: "red", margin: 0 }}>{errorInput.username}</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                placeholder="Email"
                name="email"
                className={classes.field}
              ></input>
              <p style={{ color: "red", margin: 0 }}>{errorInput.email}</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faLock} />
              <input
                placeholder="Password"
                name="password"
                className={classes.field}
              ></input>
            </div>

            <button type="submit" className={classes.btn}>
              Create account
            </button>
          </form>
        </div>

        <p style={{ textAlign: "center", color: "gray" }}>
          Already have account?
        </p>
        <h4
          onClick={handleNavigateLogin}
          style={{ cursor: "pointer", textAlign: "center", fontSize: "large" }}
        >
          Log in
        </h4>
      </div>
    </div>
  );
};

export default Register;
