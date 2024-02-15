import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => ({ ...state.products }));
  const { category } = useSelector((state) => state.category);
  const [starNum, setStarNum] = useState(0);

  const user = JSON.parse(localStorage.getItem("token"));
  let token;
  if (user) {
    token = user.token;
  }

  console.log(products);

  console.log(token);

  const productID = useParams().id;

  const product = products.find((product) => product._id === productID);
  console.log(product);

  const categories = category.map((item) =>
    Object.values(item)[5].find((cate) => cate._id === productID)
  );
  const data = categories.find((cat) => cat !== undefined);
  console.log(data);

  const [image, setImage] = useState();

  let DATA = null;

  if (product !== undefined) {
    DATA = product;
  } else {
    DATA = data;
  }

  console.log(DATA._id);

  const average = DATA.rate.reduce((acc,current)=> acc + current,0) / DATA.rate.length;

  useEffect(() => {
    setImage(DATA.img[0][1]);
    if (average >= 5) {
      setStarNum(Math.ceil(average));
    } else {
      setStarNum(Math.floor(average));
    }
  }, [DATA, average]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleImage = (url) => {
    setImage(url);
  };

  function handleRate(DATA) {
    navigate(`/rate/${DATA._id}`)
  }

  return (
    <div className={classes.wraper}>
      <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div className={classes.pictureWrap}>
        <img src={image} alt="pictures" className={classes.picture}></img>
      </div>

      <div className={classes.slider}>
        <div className={classes.slidePicWrap}>
          {DATA.img.map((img) => {
            const url = Object.values(img)[0];
            return (
              <img
                src={url}
                alt="img"
                className={classes.detailImg}
                onClick={() => handleImage(url)}
                key={url}
              ></img>
            );
          })}
        </div>
      </div>

      <div>
        <div className={classes.text}>
          <div className={classes.infoWraper}>
            <h2>
              {DATA.productName + " " + DATA.type}
              <br />
              {DATA.weight && DATA.weight + "g"}
            </h2>
            <h1 className={classes.price}>{DATA.price + " RSD"}</h1>
          </div>
          <div>
            <p>{DATA.description}</p>
          </div>
        </div>

        <div className={classes.rateing}>
          <div>
            <p style={{ fontWeight: "bold" }}>Ratings and comentars</p>
            {!token && <p>No comments for now</p>}
            {token && (
              <>
                <div className={classes.rateWrapper}>
                  <div className={classes.elementWrapper}>
                    {DATA && <div className={classes.rate}>{average.toFixed(1)}</div>}
                    <div>
                      <div>
                        {Array.from({ length: starNum }).map((_, index) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            key={index}
                            style={{ marginRight: ".2rem" }}
                          />
                        ))}
                        {Array.from({ length: 5 - starNum }).map((_, index) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "white" }}
                            key={index}
                          />
                        ))}
                      </div>
                      <div>Rate number: {DATA.rate.length}</div>
                    </div>
                  </div>
                  <div className={classes.btnWraper}>
                    <btn className={classes.rateBtn} onClick={() => handleRate(DATA)}>Rate</btn>
                  </div>
                </div>
                <div className={classes.comments}>
                  <p style={{ marginRight: "1rem" }}>Show coments</p>
                  <FontAwesomeIcon icon={faArrowDown} size="1x" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
