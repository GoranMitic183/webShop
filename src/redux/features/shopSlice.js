import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shopData",
  initialState: {
    products: [],
  },
  reducers: {
    setProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) =>
          product.velicina === action.payload.velicina &&
          product.productName === action.payload.productName
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].kolicina =
          parseInt(state.products[existingProductIndex].kolicina) + 1;
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    removeProduct: (state, action) => {
        const id = action.payload;
       state.products = state.products.filter((product) => product._id !== id);
  }, 
  addProduct: (state, action) => {
    const id = action.payload;
    const updatedProducts = state.products.map(product => {
        if (product._id === id) {
            return {
                ...product,
                kolicina: product.kolicina + 1
            };
        }
        return product;
    });

    return {
        ...state,
        products: updatedProducts
    };
  },
  decrementProduct: (state, action) => {
    const id = action.payload;
    const updatedProducts = state.products.map(product => {
      if (product._id === id) {
          return {
              ...product,
              kolicina: product.kolicina - 1
          };
      }
      return product;
  }).filter(product => product.kolicina !== 0);

  return {
      ...state,
      products: updatedProducts
  };
  }
  }
});

export const { setProduct, removeProduct, addProduct, decrementProduct } = shopSlice.actions;
export default shopSlice.reducer;
