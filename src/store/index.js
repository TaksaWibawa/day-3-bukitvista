import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./auth";
import { getProductByCategoryReducer, getProductByIdReducer, getProductCategoriesReducer, getProductsReducer } from "./product-dashboard";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		getProductByCategory: getProductByCategoryReducer,
		getProductById: getProductByIdReducer,
		getProductCategories: getProductCategoriesReducer,
		getProducts: getProductsReducer,
	},
});
