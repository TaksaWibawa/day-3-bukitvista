import { AxiosError } from "axios";
import { axiosInstance } from "../../../configs";

/**
 * APIProduct is a service for product dashboard.
 */
export const APIProduct = {
	/**
	 * Service for get products. If success, return all products based on limit and sort.
	 * @param {{limit: string, sort: string}} payload - Limit and sort
	 */
	getProducts: async ({ limit, sort }) => {
		try {
			const response = await axiosInstance.get(`/products?limit=${limit}&sort=${sort}`);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) throw new Error(error.response.data);
			throw new Error(error.message);
		}
	},

	/**
	 * Service for get product by id. If success, return product data of the id.
	 * @param {string} id - Product id
	 */
	getProductById: async (id) => {
		try {
			const response = await axiosInstance.get(`/products/${id}`);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) throw new Error(error.response.data);
			throw new Error(error.message);
		}
	},

	/**
	 * Service for get product by category. If success, return product data of the category.
	 * @param {{category: string, limit: string, sort: string}} payload - Product category, limit and sort
	 */
	getProductByCategory: async ({ category, limit, sort }) => {
		try {
			const response = await axiosInstance.get(`/products/category/${category}?limit=${limit}&sort=${sort}`);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) throw new Error(error.response.data);
			throw new Error(error.message);
		}
	},

	/**
	 * Service for get product categories. If success, return all product categories.
	 */
	getProductCategories: async () => {
		try {
			const response = await axiosInstance.get(`/products/categories`);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) throw new Error(error.response.data);
			throw new Error(error.message);
		}
	},
};
