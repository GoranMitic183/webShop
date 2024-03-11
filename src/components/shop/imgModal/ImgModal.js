import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./ImgModal.module.css";
import { useLocation } from "react-router-dom";

import toast from "react-hot-toast";

const ImgModal = forwardRef(function Modal(props, ref) {
//   const product = props.product;
  const url = props.img;
  const id = props.id;
  const cat = props.cat;

  const dialog = useRef();
  const location = useLocation();
  console.log(location.pathname);

  let token = JSON.parse(localStorage.getItem("token"));

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if(token){
          dialog.current.showModal();
        }else {
          toast.error("Please login first.")
        }
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  const closeModal = () => {
    dialog.current.close();
  };

  return createPortal(
    <dialog ref={dialog} className={classes.wraper}>
      { location.pathname === `/product/${id}/${cat}` &&
        (
          <div style={{height: "90vh", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
             <div onClick={closeModal} className={classes.close}>
              X
            </div>
            <img src={url} alt="pic" style={{height: "100%"}}></img>
          </div>
        )
      }
      <form method="dialog" id="modal-actions">
        {props.actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ImgModal;