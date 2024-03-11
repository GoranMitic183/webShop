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

const [sorted , setSorted ] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let sortedProducts = products;
    
    if (sort !== 0) {
     const flaten =  sortedProducts.flat();
      switch (sort) {
        case 5:
          flaten.sort((a, b) => a.price - b.price);
          break;
        case 4:
          flaten.sort((a, b) => b.price - a.price);
          break;
          case 2: 
          flaten.sort((a, b)=> a.rate - b.rate);
          break; 
        default:
          break;
      }
      setSorted(flaten);
    } else {
      setSorted([]);
    }
  }, [sort, products]);


  // function handleSearchInput(value) {
  //   setSearchTerm(value);
  // }

  function handleClose() {
    dispatch(removeProducts());
    setSearchTerm("");
  }

  return (
    <div className={classes.container}>
      <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm}/>
      {searchTerm && (
        <div className={classes.results}>
          <p style={{ color: "gray" }}>{`Results for "${searchTerm}"`}</p>
          <div className={classes.close} onClick={handleClose}>
            X
          </div>
        </div>
      )}
      <div className={!products && category? classes.categories : classes.wraper}>
        {category && !products && category.map((category) => {
          return <CategorieBar data={category} />;
        })}
        {products !== null && products.length > 0 && sorted.length === 0 &&
          products.flat().map((product) => (
            <div className={classes.mainWrapper} key={product._id}>
              <MainCard product={product} />
            </div>
          ))
        }
        {sorted.length > 0 &&
          sorted.map((product)=> {
            return (
            <div className={classes.mainWrapper} key={product._id}>
            <MainCard product={product} />
          </div>)
          })
        }
      </div>

    </div>
  );
  
};

export default CategoriePage;
