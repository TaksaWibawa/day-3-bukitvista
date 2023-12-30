import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { UnauthorizedPage } from "../../pages";

export function PrivateRoute() {
	if (!Cookies.get("token")) {
		return <UnauthorizedPage />;
	}

	return <Outlet />;
}
