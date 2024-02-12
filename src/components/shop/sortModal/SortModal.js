import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import classes from './SortModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/features/searchSlice";


const SortModal = forwardRef(function Modal(props, ref) {

  const product = props.product;
  const dialog = useRef();
  const dispatch = useDispatch();

  const [type, setType ] = useState(0);
  const [color, setColor ] = useState("");

  function handleSortCheck() {
    dispatch(setSort(type));
    dialog.current.close();
  }

  function handleType(e) {
    console.log(e.target.value);
    setType(e.target.value);
    setColor("gray");
  }

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

  return createPortal(
    <dialog ref={dialog} className={classes.wraper}>
      <div >
        <div className={classes.title}>
        <h2>Sort by</h2>
<div style={{cursor: "pointer"}}>
  <FontAwesomeIcon icon={faCheck} size="2x" onClick={handleSortCheck}/>
</div>
        </div>
        <div>
          <ul className={classes.list}>
            <li className={classes[color !== "" && type === 0 ? color : "sortList"]} value={0} onClick={(e)=>handleType(e)}>Defaults</li>
            <li className={classes[color !== "" && type === 1 ? color : "sortList"]} value={1} onClick={(e)=>handleType(e)}>Popularity</li>
            <li className={classes[color !== "" && type === 2 ? color : "sortList"]} value={2} onClick={(e)=>handleType(e)}>Rate</li>
            <li className={classes[color !== "" && type === 3 ? color : "sortList"]} value={3} onClick={(e)=>handleType(e)}>Latest</li>
            <li className={classes[color !== "" && type === 4 ? color : "sortList"]} value={4} onClick={(e)=>handleType(e)}>Price (most expensive)</li>
            <li className={classes[color !== "" && type === 5 ? color : "sortList"]} value={5} onClick={(e)=>handleType(e)}>Price (cheapest first)</li>
          </ul>
        </div>
      </div>
    </dialog>,
    document.getElementById("sort")
  );
});

export default SortModal;