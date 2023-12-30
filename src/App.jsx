import { Navbar } from "./components/navbar";
import { Routes as BaseRouter, Route } from "react-router-dom";
import { LoginPage, NotFoundPage, ProductDashboardPage, ProductDetailPage } from "./pages";
import { PrivateRoute, ProtectedRoute } from "./routes";

function App() {
	return (
		<>
			<Navbar />
			<BaseRouter>
				<Route element={<ProtectedRoute />}>
					<Route
						path="/"
						element={<LoginPage />}
					/>
				</Route>
				<Route element={<PrivateRoute />}>
					<Route
						path="/product-dashboard"
						element={<ProductDashboardPage />}
					/>
					<Route
						path="/product-dashboard/:id"
						element={<ProductDetailPage />}
					/>
				</Route>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
			</BaseRouter>
		</>
	);
}

export default App;
