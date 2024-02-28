import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shopData",
  initialState: {
    products: [],
    user: "",
  },
  reducers: {
    setProduct: (state, action) => {
      const { products, user } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) =>
          product.velicina === action.payload.velicina &&
          product.productName === action.payload.productName
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].kolicina =
          parseInt(state.products[existingProductIndex].kolicina) + 1;
      } else {
        state.products.push({ ...products, user });
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product._id !== id);
    },
    addProduct: (state, action) => {
      const id = action.payload;
      const updatedProducts = state.products.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            kolicina: product.kolicina + 1,
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    },
    decrementProduct: (state, action) => {
      const id = action.payload;
      const updatedProducts = state.products
        .map((product) => {
          if (product._id === id) {
            return {
              ...product,
              kolicina: product.kolicina - 1,
            };
          }
          return product;
        })
        .filter((product) => product.kolicina !== 0);

      return {
        ...state,
        products: updatedProducts,
      };
    },
    clearProducts: (state)=> {
      state.products = [];
    }
  },
});

export const { setProduct, removeProduct, addProduct, decrementProduct,clearProducts } =
  shopSlice.actions;
export default shopSlice.reducer;
