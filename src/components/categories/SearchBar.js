import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/features/searchSlice";

const SearchBar = ({onSearch, searchTerm}) => {
  const { category } = useSelector((state) => ({ ...state.category }));
  const [search, setSearch] = useState(searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== "") {
      const filteredProducts = category.map((cat) => {
        let products = Object.values(cat)[4];

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
        placeholder=" &#61442; Search"
        className={classes.search}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
