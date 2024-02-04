import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../redux/features/shopSlice";
import classes from './ShopModal.module.css'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ShopModal = forwardRef(function Modal(props, ref) {

  const product = props.product;
  const dialog = useRef();
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(product);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      }
    };
  });

  const addProduct = (size,product) => {
    const item = {...product, velicina:size,kolicina:1};
    dispatch(setProduct(item));
    dialog.current.close()
  }

  const closeModal = () => {
    dialog.current.close()
  }

  return createPortal(
    <dialog ref={dialog} className={classes.wraper}>
      {location.pathname !== "/profile" &&
      <>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div>
      <h2 style={{textAlign:"center"}}>
        {product.productName}
        <br></br>
        {product.type}
      </h2>
      <p style={{textAlign:"center",fontSize:"larger"}}>Select size</p>
      </div>  
      <div onClick={closeModal} className={classes.close}>X</div>
      </div> 
      <hr></hr>
      <ul className={classes.list}>
        {product.velicina &&
          product.velicina.map((size) => {
            return (
              <>
              <li onClick={() => addProduct(size,product)} className={classes.segment}>
                {"Size: "+size.toUpperCase()} <p>{product.price + " RSD"}</p>
              </li>
              <hr></hr>
              </>
            );
          })}
      </ul>
      </>}
      {location.pathname === "/profile" && <div>
        <div>
          <h1>GYMSTER</h1>
          <div onClick={closeModal} className={classes.close}>X</div>
          <p>
Everything you need from the Gymster shop in a few clicks and at the best prices. Don't look for excuses. Train.</p>
<a href="https://www.gymster.rs" >https://www.gymster.rs</a><br></br>
<a href="https://www.google.rs" >Google</a>
<div>
<a href="https://www.instagram.com" className={classes.links}>
<FontAwesomeIcon icon={faEnvelope} className={classes.icon} size="3x"/>
</a>
<a href="https://www.facebook.com">
<FontAwesomeIcon icon={faEnvelope} className={classes.icon} size="3x"/>
</a>
</div>
        </div>
        </div>}
      <form method="dialog" id="modal-actions">
        {props.actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ShopModal;
