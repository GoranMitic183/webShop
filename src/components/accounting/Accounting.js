import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import classes from "./Accounting.module.css";
import { useNavigate } from "react-router-dom";

const Accounting = () => {

  const navigate = useNavigate();

  const { products } = useSelector((state) => ({ ...state.shopData }));
  let total = 0;
  let shiping = 0
  products.map((product) => {
    return (total += +product.price * product.kolicina);
  });
  if(total>= 5000){
    shiping = 0
  }else{
    shiping = 400
  }
  console.log(products);

  const handleNext = () => {
    navigate("/form")
  }

  function handleBack(){
    navigate(-1)
  }

  return (
   
    <>
 <div className={classes.wrapper}>
      <div className={classes.container}>
        <div>
          <div onClick={handleBack} className={classes.back}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          {/* <h2>Choose a delivery method</h2> */}
        </div>
        <div>
          <h3>Choose the delivery method for the products</h3>
          {products.map((product)=> {
            return (
              <p>
                {product.kolicina + "X"}{ " " +product.productName + " " + product.type + (product.boja ? "-" + product.boja : "")}
              </p>
            )
          })}
          <div style={{display: "flex", justifyContent: "space-between"}}>
           <p>Delivery price: {shiping} RSD</p> 
            <btn className={classes.dot}>.</btn>
          </div>
        </div>
        <hr></hr>
        <div>
          <p>Total (excluding shipping) {total} RSD</p>
          <p>Delivery expenses: {shiping} RSD</p>
          <h2>Total price {total + shiping} RSD</h2>
          <p>Get free shipping on purchases over 5.000RSD</p>
        </div>
      </div>
    </div>
    <div className={classes.wraperTaster}>
    <div className={classes.taster} onClick={handleNext}>Next</div>

    </div>

    </>
  );
};

export default Accounting;
