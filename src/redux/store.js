import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./features/productsSlice";

export default configureStore({
    reducer: {
        products: ProductsReducer,
    }
})