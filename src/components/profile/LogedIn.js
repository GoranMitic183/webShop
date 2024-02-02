import React from "react";
// import classes from './LogedIn.module.css';
import { useNavigate } from "react-router-dom";
import classes from "./LogedIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faAddressBook,
  faUserXmark,
  faPowerOff,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const LogedIn = () => {
  const data = JSON.parse(localStorage.getItem("token"));
  console.log(data);

  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.holder}>
        <div className={classes.userWrapper}>
          <div className={classes.user}>
            <div className={classes.name}>{data.user.email[0]}</div>
            </div>
          <h3>{data.user.email}</h3>
        </div>
        <div>
          <div className={classes.field}>
            <FontAwesomeIcon icon={faClockRotateLeft} className={classes.icon}/>
            Shopping history
            <div className={classes.arrow}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>          </div>
          <div className={classes.field}>
            <FontAwesomeIcon icon={faAddressBook} className={classes.icon}/>
            Contact us
            <div className={classes.arrow}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>          </div>
          <div className={classes.field}>
            <FontAwesomeIcon icon={faUserXmark} className={classes.icon}/>
            Delete account
            <div className={classes.arrow}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>          </div>
          <div className={classes.field} onClick={handleLogOut}>
            <FontAwesomeIcon icon={faPowerOff} className={classes.icon}/>
            Log out
            <div className={classes.arrow}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default LogedIn;
