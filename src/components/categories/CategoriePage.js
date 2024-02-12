import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CategorieBar from "./CategorieBar";
import classes from "./CategoriePage.module.css";
import { useSelector } from "react-redux";
import MainCard from "../mainCard/MainCard";
import { removeProducts } from "../../redux/features/searchSlice";
import { useDispatch } from "react-redux";

const CategoriePage = () => {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => ({ ...state.category }));
  const { products } = useSelector((state) => ({ ...state.searchData }));
  const { sort } = useSelector((state) => ({ ...state.searchData }));

  console.log(sort);
console.log(products);

const [sorted , setSorted ] = useState([]);

  useEffect(() => {
    let sortedProducts = products;
    
    if ( sort !== 0) {
      sortedProducts.flat();
      switch (sort) {
        case 5:
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 4:
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
      setSorted(sortedProducts);
    } else {
      setSorted([]);
    }
  }, [sort, products]);

  console.log(sorted);

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  function handleClose() {
    dispatch(removeProducts());
    setSearchTerm("");
  }

  return (
    <div className={classes.container}>
      <SearchBar onSearch={setSearchTerm} />
      {searchTerm && (
        <div className={classes.results}>
          <p style={{ color: "gray" }}>{`Results for "${searchTerm}"`}</p>
          <div className={classes.close} onClick={handleClose}>
            X
          </div>
        </div>
      )}
      <div className={classes.wraper}>
        {category && !products && category.map((category) => {
          return <CategorieBar data={category} />;
        })}
        {products !== null && products.length > 0 &&
          products.map((product) => (
            
            <div className={classes.mainWrapper} key={product._id}>
              <MainCard product={product} />
            </div>
          ))
        }
      </div>

    </div>
  );
  
};

export default CategoriePage;
