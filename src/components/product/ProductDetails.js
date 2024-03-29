import React, { useEffect, useState, useRef} from "react";
import classes from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import ShopBar from "./ShopBar";
import ImgModal from "../shop/imgModal/ImgModal";

const ProductDetails = () => {
  const navigate = useNavigate();
  const modal = useRef();
  const { products } = useSelector((state) => ({ ...state.products }));
  const { category } = useSelector((state) => state.category);
  const [ starNum, setStarNum ] = useState(0);
  const [ show, setShow ] = useState(false);

  const user = JSON.parse(localStorage.getItem("token"));

  let token;
  if (user) {
    token = user.token;
  }

  const productID = useParams().id;
  const categoryID = useParams().catID;

  const product = products.find((product) => product._id === productID);

  const categories = category.map((item) =>
    Object.values(item)[4].find((cate) => cate._id === productID)
  );
  const data = categories.find((cat) => cat !== undefined);

  const [image, setImage] = useState();

  let DATA = null;

  if (product !== undefined) {
    DATA = product;
  } else {
    DATA = data;
  }

  const comments = DATA.rate;

  const average = DATA.rate.reduce((acc,current)=> acc + current.stars,0) / DATA.rate.length;

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
    if(token){
      navigate(`/rate/${DATA._id}/${categoryID}`)
    }else{
      toast.error("Login if you want to rate product!")
    }
  }

  function handleShowComments() {
    if(token){
      setShow(!show)
    } else {
      toast.error("Login if you want to show comments!")
    }
  }

  function handleModal() {
    modal.current.open()
  }

  return (
    <div className={classes.wraper}>
      <ImgModal ref={modal} img={image} product={DATA} id={productID} cat={categoryID}/>
      <btn onClick={handleBack} className={classes.backBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </btn>
      <div className={classes.pictureWrap} onClick={handleModal}>
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
            <p style={{ fontWeight: "bold" }}>Ratings and comments</p>
            {!DATA.rate.length > 0 && <p>No comments for now</p>}
            {DATA.rate && (
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
                            style={{ marginRight: ".2rem" , color: "gold"}}
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
                      <div style={{marginTop: ".2rem"}}>Number of rates: {DATA.rate.length}</div>
                    </div>
                  </div>
                  <div className={classes.btnWraper}>
                    <btn className={classes.rateBtn} onClick={() => handleRate(DATA)}>Rate</btn>
                  </div>
                </div>
                {comments.length > 0  &&  <div className={classes.comments} onClick={handleShowComments}>
                  <p style={{ marginRight: "1rem" }}>{ !show ? "Show coments" : "Hide Coments"}</p>
                  <FontAwesomeIcon icon={ !show ? faArrowDown : faArrowUp} size="1x" />
                </div>}
               {show && DATA.rate.map((comment)=>{
                return (
                  <div>
                  <div>
                    <div>
                    <h2>{comment.name}</h2> 
                    {Array.from({ length: comment.stars }).map((_, index) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "gold" }}
                            key={index}
                          />
                        ))}
                         {Array.from({ length: 5 - comment.stars }).map((_, index) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "white" }}
                            key={index}
                          />
                        ))}
                    </div>
                    <p style={{color: "gray"}}>{comment.date}</p>
                    <p>{comment.comments}</p>
                  </div>
                </div>
                )
               })  }
              </>
            )}
          </div>
        </div>
        <ShopBar product={DATA}/>
      </div>
    </div>
  );
};

export default ProductDetails;
