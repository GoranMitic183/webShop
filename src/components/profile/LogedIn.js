import React, { useRef } from "react";
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
import ShopModal from "../shop/shopModal/ShopModal";
import { removeUser } from "../../API/api";
import { clearProducts } from "../../redux/features/shopSlice";
import { useDispatch } from "react-redux";
import { clearList } from "../../redux/features/wishSlice";

const LogedIn = () => {
  const data = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();
  const modal = useRef();
  const dispatch = useDispatch();

  function handleLogOut() {
    localStorage.removeItem("token");
    dispatch(clearProducts());
    dispatch(clearList())
    navigate("/login");
  }

  function handleContactUs() {
    modal.current.open();
  }

  function handleRemoveUser() {
    const data = JSON.parse(localStorage.getItem("token"));
    const id = data.user._id;
    if (id) {
      removeUser(id);
      localStorage.clear();
      navigate("/register");
      dispatch(clearProducts());
    } else {
      console.log("error");
    }
  }

  return (
    <div className={classes.wrapper}>
      <ShopModal ref={modal} />
      <div className={classes.holder}>
        <div className={classes.userWrapper}>
          <div className={classes.user}>
            <div className={classes.name}>{data.user.email[0]}</div>
          </div>
          <h3>{data.user.email}</h3>
        </div>
        <div style={{ width: "100%", position: "sticky", bottom: "4rem" , background: "white"}}>
          <div className={classes.field}>
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className={classes.icon}
            />
            Shopping history
            <div className={classes.arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>{" "}
          </div>
          <div className={classes.field} onClick={handleContactUs}>
            <FontAwesomeIcon icon={faAddressBook} className={classes.icon} />
            Contact us
            <div className={classes.arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>{" "}
          </div>
          <div className={classes.field} onClick={handleRemoveUser}>
            <FontAwesomeIcon
              icon={faUserXmark}
              className={classes.icon}
              color="red"
            />
            Delete account
            <div className={classes.arrow}>
              <FontAwesomeIcon icon={faArrowRight} color="red" />
            </div>{" "}
          </div>
          <div className={classes.field} onClick={handleLogOut}>
            <FontAwesomeIcon icon={faPowerOff} className={classes.icon} />
            Log out
            <div className={classes.arrow}>
              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default LogedIn;
