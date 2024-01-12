import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: "productsData",
    initialState: {
        products: null,
        loading: false,
        error: "",
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;