import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList: [],
        loading: false,
        error: "",
    },
    reducers: {
        setWishList: (state, action) => {
            state.wishList = [ ...state.wishList, action.payload]
        },
        removeWishList: (state, action) => {
            const id = action.payload;
            state.wishList = state.wishList.filter((product)=>product._id !== id);
        }
    },
})

export const { setWishList, removeWishList } =  wishSlice.actions;
export default wishSlice.reducer;