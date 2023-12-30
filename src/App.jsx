import { Routes as BaseRouter, Route } from "react-router-dom";

function App() {
	return (
		<BaseRouter>
			<Route
				path="/"
				element={<h1>Home</h1>}
			/>
		</BaseRouter>
	);
}

export default App;
