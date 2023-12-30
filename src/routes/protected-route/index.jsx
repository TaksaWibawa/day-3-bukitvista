import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
	if (Cookies.get("token")) {
		return <Navigate to="/product-dashboard" />;
	}

	return <Outlet />;
}
