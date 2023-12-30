import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../services/apis";

const initialState = {
	status: "idle",
	message: "",
	categories: [],
	currentCategory: "all",
};

export const getProductCategories = createAsyncThunk("product-dashboard/get-product-categories", APIProduct.getProductCategories);

export const getProductCategoriesSlice = createSlice({
	name: "get-product-categories",
	initialState,
	reducers: {
		resetGetProductCategoriesState: () => initialState,
		setCurrentCategory: (state, action) => {
			state.currentCategory = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductCategories.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getProductCategories.fulfilled, (state, action) => {
				state.status = "success";
				state.categories = action.payload;
			})
			.addCase(getProductCategories.rejected, (state, action) => {
				state.status = "error";
				state.message = action.error.message;
			});
	},
});

export const { resetGetProductCategoriesState, setCurrentCategory } = getProductCategoriesSlice.actions;
export const getProductCategoriesReducer = getProductCategoriesSlice.reducer;
export const selectGetProductCategoriesState = (state) => state.getProductCategories;
