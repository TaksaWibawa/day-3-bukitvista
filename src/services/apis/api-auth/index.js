import { AxiosError } from "axios";
import { axiosInstance } from "../../../configs";

/**
 * APIAuth is a service for user authentication.
 */
export const APIAuth = {
	/**
	 * Service for user login. if success, return user's access token.
	 * @param {{username: string, password: string}} payload - User's username and password
	 */
	login: async (payload) => {
		try {
			const response = await axiosInstance.post("/auth/login", payload);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) throw new Error(error.response.data);
			throw new Error(error);
		}
	},
};
