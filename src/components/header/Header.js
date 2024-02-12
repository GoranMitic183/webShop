import React, { useRef } from "react";
import classes from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import  SortModal from "../shop/sortModal/SortModal";

const Header = () => {

  const modal = useRef();

  const { products } = useSelector((state) => ({ ...state.searchData }));

  const location = useLocation();
  let text = "";
  let style = "text";
  let container = "";

  switch (location.pathname) {
    case "/":
      text = "GYMSTER";
      container = "header"
      break;

    case "/added":
      text = "Wish List";
      style = "head";
      container = "center"
      break;

    case "/shop":
      text = "Shop";
      style = "head";
      container = "center"

      break;

    case "/profile":
      text = "Profile";
      style = "head";
      container = "center"

      break;

    default:
      text = "GYMSTER";
      style = "text";
      container = "header";
      break;
  }

  function handleSort() {
    modal.current.open();
  }

  return (
    <header className={`${classes[container]}`}>
      <SortModal ref={modal}/>
      <h1 className={`${classes[style]}`}>{text}</h1>
      {products && (
        <div className={classes.sort} onClick={handleSort}>
          <FontAwesomeIcon icon={faArrowDownWideShort} size="2x" />
        </div>
      )}
    </header>
  );
};

export default Header;
