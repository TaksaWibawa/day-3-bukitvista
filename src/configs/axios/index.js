import axios from "axios";

const headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

export const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}`,
	headers,
});
