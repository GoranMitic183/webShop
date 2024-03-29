import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import classes from "./Rate.module.css";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../API/api";
import toast from "react-hot-toast";

const Rate = () => {
  const navigate = useNavigate();
  const productID = useParams().id;
  const categoryID = useParams().catID;

  const [stars, setStarsNum] = useState(0);
  const [message, setMessage] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const name = token.user.username;

  const handleBack = () => {
    navigate(-1);
  };

  function handleText(text) {
    setMessage(text);
  }

  function handleSend() {
    if(stars > 0 && message.length > 0){
      sendMessage(productID, message, stars, name, categoryID);
    }else {
      toast.error("Please rate and write comment first.")
    }
  }

  return (
    <div>
      <header>
        <btn onClick={handleBack} className={classes.backBtn}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </btn>
      </header>
      <div className={classes.wrapper}>
        <div>
          <h2 style={{ fontWeight: "500" }}>Rateing</h2>
          <div>
            {stars === 0 &&
              Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  size="4x"
                  style={{ marginRight: ".2rem", color: "gray" }}
                  onClick={() => setStarsNum(index + 1)}
                />
              ))}
            {stars > 0 &&
              Array.from({ length: stars }).map((_, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  size="4x"
                  style={{ color: "gold" }}
                  key={index}
                  onClick={() => setStarsNum(index + 1)}
                />
              ))}
            {stars > 0 &&
              Array.from({ length: 5 - stars }).map((_, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  size="4x"
                  style={{ marginRight: ".2rem", color: "gray" }}
                  onClick={() => setStarsNum(index + stars + 1)}
                />
              ))}
          </div>
          <h2 style={{ fontWeight: "500" }}>Write your comment</h2>
          <p>Comment*</p>
          <div className={classes.textWrapper}>
            <textarea
              placeholder="Description"
              onChange={(e) => handleText(e.target.value)}
              cols="50"
              rows="10"
              style={{ borderRadius: ".5rem", padding: ".5rem", width: "98%" }}
            ></textarea>
          </div>
          <p style={{ color: "gray", textAlign: "end", marginRight: "1rem" }}>
            0/500
          </p>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <btn className={classes.sendBtn} onClick={handleSend}>
          Send comment
        </btn>
      </div>
    </div>
  );
};

export default Rate;
