import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as API from "../../API/api";

export const allCategoryData = createAsyncThunk(
    "categoryData/allCategoryData",
    async ({rejectWithValue}) => {
        try {
            const response = await API.getCategoriesData();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const categorySlice = createSlice({
    name: "categoryData",
    initialState: {
     category: null,
    loading: false,
    error: null
    },
   reducers: {
    categoryData: (state, action) => {
        state.category = action.payload;
    }
   },
   extraReducers: (builder) => {
    builder
    .addCase(allCategoryData.pending, (state)=> {
        state.loading = true;
    })
    .addCase(allCategoryData.fulfilled,  (state, action) => {
        state.loading = false;
        state.category = action.payload;
    }
    )
    .addCase(allCategoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.mesage
    })
   }
})

export const { categoryData } = categorySlice.actions;
export default categorySlice.reducer;