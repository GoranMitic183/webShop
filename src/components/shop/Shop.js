import React from "react";
import { useSelector } from "react-redux";
import classes from "./Shop.module.css";
import {
  faTicket,
  faAngleRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/features/shopSlice";

const Shop = () => {
  const { products } = useSelector((state) => ({ ...state.shopData }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let total = 0;

  products.map((product) => {
    return (total += +product.price * product.kolicina);
  });

  const handleStartShopping = () => {
    navigate("/");
  };

  function handleRemove(id) {
    dispatch(removeProduct(id));
  }

  return (
    <>
      {products.length !== 0 && (
        <div className={classes.wraper}>
          <h2 style={{ textAlign: "center" }}>Shop</h2>
          <hr></hr>
          {products.map((product) => {
            return (
              <div className={classes.card}>
                <div className={classes.left}>
                  <div className={classes.picture}>
                    <img
                      src={product.img[0][1]}
                      alt="pic"
                      style={{ height: "100%" }}
                    ></img>
                  </div>
                  <div>
                    <h2>{product.productName + " " + product.type}</h2>
                    {product.velicina && (
                      <p className={classes.fade}>
                        {"Size: " + product.velicina.toUpperCase()}
                      </p>
                    )}

                    <div className={classes.fade}>
                      Quantity <btn className={classes.btn}>-</btn>
                      {product.kolicina}
                      <btn className={classes.btn}>+</btn>
                    </div>
                  </div>
                </div>
                <div className={classes.right}>
                  <btn className={classes.close} onClick={()=>handleRemove(product._id)}>X</btn>
                  <h2>{product.price * product.kolicina + " RSD"}</h2>
                </div>
              </div>
            );
          })}
          <hr></hr>
          <div className={classes.wraperCoupon}>
            <div className={classes.coupon}>
              <FontAwesomeIcon icon={faTicket} />
              <h2 style={{ marginLeft: "1rem" }}>Apply the coupon</h2>
            </div>
            <div className={classes.angle}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <hr></hr>
          <div className={classes.totalWraper}>
            <p>Total price (without delivery)</p>
            <p className={classes.total}>{total + " RSD"}</p>
          </div>
          <h2 style={{ margin: "0 2rem" }}>
            Get a discount on free shipping with purchases over 5.000 RSD
          </h2>
          <p className={classes.fade} style={{ marginLeft: "2rem" }}>
            Shipping costs may affect the final price
          </p>
        </div>
      )}
      {products.length === 0 && (
        <div className={classes.emptyWrapper}>
          <div style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faCartShopping} size="5x" />
            <h2>Shop is empty</h2>
            <p>Nothing here yet. Just possibilities</p>
            <div className={classes.taster} onClick={handleStartShopping}>Start shoping</div>
          </div>
        </div>
      )}

      {products.length !== 0 && (
        <div className={classes.wraperTaster}>
          <div className={classes.taster} onClick={handleStartShopping}>
            Start shoping
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
