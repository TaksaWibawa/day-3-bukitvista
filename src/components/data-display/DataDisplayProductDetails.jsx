import { capitalizeFirstLetter } from "../../utils/formatting/capitalizeFirstLetter";

export function DataDisplayProductDetails({ product, navigate }) {
	return (
		<div className="w-2/3">
			<div className="text-xl">
				<div className="flex gap-1 text-sm text-gray-500">
					<span>{capitalizeFirstLetter(product?.category)} |</span>
					<span className="my-auto">
						{product?.rating?.rate}
						<span className="ms-1">({product?.rating?.count})</span>
					</span>
				</div>
				<div className="">{capitalizeFirstLetter(product?.title)}</div>
				<div className="text-2xl text-green-700">${product?.price}</div>
			</div>
			<div className="mt-4">{product?.description}</div>
			<div className="mt-4 flex gap-4">
				<button className="py-2 px-4 rounded-md bg-blue-500 text-white font-semibold cursor-pointer duration-200 ease-in-out hover:bg-blue-600">Buy Now</button>
				<button
					className="py-2 px-4 rounded-md bg-gray-500 text-white font-semibold cursor-pointer duration-200 ease-in-out hover:bg-gray-600"
					onClick={() => navigate("/product-dashboard")}
				>
					Go Back
				</button>
			</div>
		</div>
	);
}
