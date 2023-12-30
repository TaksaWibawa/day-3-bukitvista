import { selectGetProductByCategoryState, selectGetProductCategoriesState, selectGetProductsState } from "../../store/product-dashboard";
import { SkeletonTable } from "../skeleton";
import { TableProduct } from "../table";
import { useSelector } from "react-redux";

export function DataDisplayProduct() {
	const { data: getProductsData, status: allDataStatus } = useSelector(selectGetProductsState);
	const { data: getProductsByCategoryData, status: categoryDataStatus } = useSelector(selectGetProductByCategoryState);
	const { currentCategory } = useSelector(selectGetProductCategoriesState);

	const countData = () => {
		return currentCategory === "all" ? getProductsData.length : getProductsByCategoryData.length;
	};

	return (
		<>
			{allDataStatus === "loading" || categoryDataStatus === "loading" ? <SkeletonTable count={5} /> : <TableProduct data={currentCategory === "all" ? getProductsData : getProductsByCategoryData} />}
			<div className="text-center font-semibold">Found {countData()} products</div>
		</>
	);
}
