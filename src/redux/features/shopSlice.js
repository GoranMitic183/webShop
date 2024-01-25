import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shopData",
    initialState: {
        products: []
    },
    reducers: {
        setProduct: (state, action) => {
            // const size = action.payload;

            state.products = [...state.products, action.payload];
        }
    }
})

export const { setProduct } = shopSlice.actions;
export default shopSlice.reducer;