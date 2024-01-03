import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";

const MainCard = () => {
  return (
    <div>
      <div>
        <img src="https://www.titaniumsport.rs/wp-content/uploads/2019/03/Gold-Standard-100-Whey-2.27kg-Double-Rich-Chocolate-1.jpg" alt="slika"></img>
        <h2>Active Pharma</h2>
        <p>3.999 RSD</p>
      </div>

      <div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div>
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
