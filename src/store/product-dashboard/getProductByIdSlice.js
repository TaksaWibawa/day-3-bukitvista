import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../services/apis";

const initialState = {
	status: "idle",
	message: "",
	data: {},
};

export const getProductById = createAsyncThunk("product-dashboard/get-product-by-id", APIProduct.getProductById);

export const getProductByIdSlice = createSlice({
	name: "get-product-by-id",
	initialState,
	reducers: {
		resetGetProductByIdState: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				state.status = "success";
				state.message = action.payload.message;
				state.data = action.payload;
			})
			.addCase(getProductById.rejected, (state, action) => {
				state.status = "error";
				state.message = action.error.message;
			});
	},
});

export const { resetGetProductByIdState } = getProductByIdSlice.actions;
export const getProductByIdReducer = getProductByIdSlice.reducer;
export const selectGetProductByIdState = (state) => state.getProductById;
