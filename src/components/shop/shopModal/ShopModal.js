import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../redux/features/shopSlice";

const ShopModal = forwardRef(function Modal(props, ref) {
  const product = props.product;
  const dialog = useRef();
  const dispatch = useDispatch();

  console.log(product);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const addProduct = (size,product) => {
    // console.log(size);
    const item = product;
    item.velicina = size;
    item.kolicina = 1;
    console.log(item);
    dispatch(setProduct(item));
  }

  return createPortal(
    <dialog ref={dialog}>
      <h2>
        {product.productName}
        <br></br>
        {product.type}
      </h2>
      <p>Chose variant</p>
      <ul>
        {product.velicina &&
          product.velicina.map((size) => {
            return (
              <li onClick={() => addProduct(size,product)}>
                {"Size: "+size} <p>{product.price + " RSD"}</p>
              </li>
            );
          })}
      </ul>
      <form method="dialog" id="modal-actions">
        {props.actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ShopModal;
