import { configureStore } from "@reduxjs/toolkit"
import ProductsReducer from "./features/productsSlice"
import CategoriesReducer from "./features/categorySlice"

export default configureStore({
    reducer: {
        products: ProductsReducer,
        category: CategoriesReducer,
    }
})