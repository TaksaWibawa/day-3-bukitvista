import { BaseLayout } from "../../layouts";
import { DataDisplayProductDetails, DataDisplayProductImage } from "../../components/data-display";
import { getProductById, resetGetProductByIdState, selectGetProductByIdState } from "../../store/product-dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SkeletonProductDetails } from "../../components/skeleton";

export function ProductDetailPage() {
	const { data: product, status } = useSelector(selectGetProductByIdState);
	const id = useParams().id;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProductById(id));
		return () => {
			dispatch(resetGetProductByIdState());
		};
	}, [dispatch, id]);

	return (
		<BaseLayout className="flex justify-center items-center h-screen">
			<div className="mb-16">
				<h1 className="text-4xl font-semibold">Product Detail</h1>
			</div>
			{status === "loading" && <SkeletonProductDetails />}
			{status === "error" && <div>Error</div>}
			{status === "success" && product && (
				<>
					<div className="flex gap-10">
						<DataDisplayProductImage
							src={product?.image}
							alt={product?.title}
						/>
						<DataDisplayProductDetails
							product={product}
							navigate={navigate}
						/>
					</div>
				</>
			)}
		</BaseLayout>
	);
}
