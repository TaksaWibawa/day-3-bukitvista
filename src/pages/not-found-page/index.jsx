import { useNavigate } from "react-router-dom";
import { BaseLayout } from "../../layouts";

export function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<BaseLayout className="flex justify-center items-center h-screen gap-6">
			<div className="text-center">
				<h1 className="text-8xl font-semibold">404</h1>
				<h1 className="text-4xl font-semibold">Page Not Found</h1>
			</div>
			<button
				className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
				onClick={() => navigate(-1)}
			>
				Go Back
			</button>
		</BaseLayout>
	);
}
