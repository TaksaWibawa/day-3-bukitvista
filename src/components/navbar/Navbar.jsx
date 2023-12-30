import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

const NAVBAR_MENU = [
	{
		title: "Product Dashboard",
		path: "/product-dashboard",
	},
];

export function Navbar() {
	const navigate = useNavigate();
	const currPath = useLocation().pathname;

	const isLoggedIn = Cookies.get("token");

	const handleLogout = () => {
		Cookies.remove("token");
		navigate("/");
	};

	const currTitle = NAVBAR_MENU.find((item) => {
		if (item.path === "/") {
			return currPath === "/";
		} else {
			return currPath.startsWith(item.path);
		}
	})?.title;
	return (
		<nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-xl tracking-tight">{currTitle} Page</span>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow" />
				<div>
					{NAVBAR_MENU.map((item) => (
						<button
							key={item.title}
							className="block mt-4 min-w-[150px] lg:inline-block lg:mt-0 text-white hover:text-blue-100 mr-4"
							onClick={() => navigate(item.path)}
						>
							<span className={`${currTitle === item.title ? "font-semibold border-b-[2px]" : ""}`}>{item.title}</span>
						</button>
					))}
					<button
						className="block mt-4 min-w-[150px] lg:inline-block lg:mt-0 text-white hover:text-blue-100 mr-4"
						onClick={isLoggedIn ? handleLogout : () => navigate("/")}
					>
						<span className={`${currPath === "/" ? "font-semibold border-b-[2px]" : ""}`}>{isLoggedIn ? "Logout" : "Login"}</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
