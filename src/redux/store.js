import { configureStore } from "@reduxjs/toolkit"
import ProductsReducer from "./features/productsSlice"
import CategoriesReducer from "./features/categorySlice"
import WishListReducer from "./features/wishSlice"
import ShopReducer from './features/shopSlice'

export default configureStore({
    reducer: {
        products: ProductsReducer,
        category: CategoriesReducer,
        wishList: WishListReducer,
        shopData: ShopReducer,
    }
})