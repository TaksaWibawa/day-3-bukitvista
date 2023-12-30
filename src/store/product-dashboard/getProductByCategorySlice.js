import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../services/apis";

const initialState = {
	status: "idle",
	message: "",
	data: [],
};

export const getProductByCategory = createAsyncThunk("product-dashboard/get-product-by-category", APIProduct.getProductByCategory);

export const getProductByCategorySlice = createSlice({
	name: "get-product-by-category",
	initialState,
	reducers: {
		resetGetProductByCategoryState: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductByCategory.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getProductByCategory.fulfilled, (state, action) => {
				state.status = "success";
				state.message = action.payload.message;
				state.data = action.payload;
			})
			.addCase(getProductByCategory.rejected, (state, action) => {
				state.status = "error";
				state.message = action.error.message;
			});
	},
});

export const { resetGetProductByCategoryState } = getProductByCategorySlice.actions;
export const getProductByCategoryReducer = getProductByCategorySlice.reducer;
export const selectGetProductByCategoryState = (state) => state.getProductByCategory;
