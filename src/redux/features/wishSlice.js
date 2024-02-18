// import { createSlice } from "@reduxjs/toolkit";

// const wishSlice = createSlice({
//     name: "wishList",
//     initialState: {
//         wishList: [
            
//         ],
//         loading: false,
//         error: "",
//     },
//     reducers: {
//         setWishList: (state, action) => {
//             const data = action.payload.data;
//             const index = state.wishList.indexOf((item)=>  item._id === data._id  );
//             if(index === -1){
//                 state.wishList = [...state.wishList, {
//                     product: data,
//                     like: true,
//                 }]
//                 console.log(state.wishList);
//             }else {
//                 // state.wishList = state.wishList.filter(item => item.product._id !== data._id);
//                 state.wishList.splice(index, 1);

//             }
//         },
//         removeWishList: (state, action) => {
//             const id = action.payload;
//             state.wishList = state.wishList.filter((data)=>data.product._id !== id);
//         }
//     },
// })

// export const { setWishList, removeWishList } =  wishSlice.actions;
// export default wishSlice.reducer;

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
            const data = action.payload;
            console.log(data);
            const index = state.wishList.findIndex(item => item.product._id === data._id);

            if (index === -1) {
                state.wishList = [...state.wishList, {
                    product: data,
                    // like: true,
                }];
            } else {
                state.wishList = state.wishList.filter(item => item.product._id !== data._id);
            }
        },
        removeWishList: (state, action) => {
            const id = action.payload;
            state.wishList = state.wishList.filter(data => data.product._id !== id);
        }
    },
});

export const { setWishList, removeWishList } =  wishSlice.actions;
export default wishSlice.reducer;
