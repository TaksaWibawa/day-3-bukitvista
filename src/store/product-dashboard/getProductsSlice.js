import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../services/apis";

const initialState = {
	status: "idle",
	message: "",
	data: [],
	limit: "10",
	sort: "asc",
};

export const getProducts = createAsyncThunk("product-dashboard/get-products", APIProduct.getProducts);

export const getProductsSlice = createSlice({
	name: "get-products",
	initialState,
	reducers: {
		resetGetProductsState: () => initialState,
		setLimit: (state, action) => {
			state.limit = action.payload;
		},
		setSort: (state, action) => {
			state.sort = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.status = "success";
				state.message = action.payload.message;
				state.data = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.status = "error";
				state.message = action.error.message;
			});
	},
});

export const { resetGetProductsState, setLimit, setSort } = getProductsSlice.actions;
export const getProductsReducer = getProductsSlice.reducer;
export const selectGetProductsState = (state) => state.getProducts;
