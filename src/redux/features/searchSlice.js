import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "searchData",
    initialState: {
        products: null,
        sort: 0,
        loading: false,
        error: "",
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        removeProducts: (state, action) => {
            state.products = null;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        }
    }
})

export const { setProducts, removeProducts, setSort } = searchSlice.actions;
export default searchSlice.reducer;