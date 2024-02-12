import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/features/searchSlice";

const SearchBar = ({onSearch}) => {
  const { category } = useSelector((state) => ({ ...state.category }));
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    if (search !== null) {
      const filteredProducts = category.map((cat) => {
        let products = Object.values(cat)[3];

        return products.filter((product) =>
          product.description.toLowerCase().includes(search.toLowerCase())
        );
      });
      console.log(filteredProducts);
      dispatch(setProducts(filteredProducts));
    }
  }, [search, category, dispatch]);

  function handleSearch(letter) {
    setSearch(letter);
    onSearch(letter);
  }

  return (
    <div className={classes.wrapper} data={search}>
      <input
        placeholder="Search"
        className={classes.search}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
