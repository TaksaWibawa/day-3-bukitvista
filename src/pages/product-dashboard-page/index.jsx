import { BaseLayout } from "../../layouts";
import { DataDisplayProduct, DropdownFilter, FilterCategorySelection } from "../../components";
import {
	getProductByCategory,
	getProductCategories,
	getProducts,
	resetGetProductByCategoryState,
	resetGetProductCategoriesState,
	resetGetProductsState,
	selectGetProductCategoriesState,
	selectGetProductsState,
	setLimit,
	setSort,
} from "../../store/product-dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

const SORT_OPTIONS = [
	{
		value: "asc",
		label: "Ascending",
	},
	{
		value: "desc",
		label: "Descending",
	},
];

const LIMIT_OPTIONS = [
	{
		value: 3,
		label: 3,
	},
	{
		value: 5,
		label: 5,
	},
	{
		value: 10,
		label: 10,
	},
];

export function ProductDashboardPage() {
	const dispatch = useDispatch();
	const { limit, sort } = useSelector(selectGetProductsState);
	const { currentCategory } = useSelector(selectGetProductCategoriesState);

	const handleLimitChange = (e) => {
		dispatch(setLimit(e.target.value));
	};

	const handleSortChange = (e) => {
		dispatch(setSort(e.target.value));
	};

	const fetchData = useCallback(
		(category) => {
			const action = category === "all" ? getProducts : getProductByCategory;
			const params = { limit, sort, category };

			dispatch(action(params));
		},
		[dispatch, limit, sort]
	);

	useEffect(() => {
		fetchData(currentCategory);
	}, [fetchData, dispatch, currentCategory]);

	useEffect(() => {
		dispatch(getProductCategories());
	}, [dispatch]);

	useEffect(() => {
		return () => {
			dispatch(resetGetProductByCategoryState());
			dispatch(resetGetProductCategoriesState());
			dispatch(resetGetProductsState());
		};
	}, [dispatch]);

	return (
		<BaseLayout className="gap-4 py-10">
			<h1 className="text-2xl font-semibold">Choose Product Category</h1>
			<FilterCategorySelection
				limit={limit}
				sort={sort}
			/>
			<div className="flex justify-between items-center gap-4">
				<DropdownFilter
					defaultValue={sort}
					options={SORT_OPTIONS}
					onChange={handleSortChange}
				/>
				<DropdownFilter
					defaultValue={limit}
					options={LIMIT_OPTIONS}
					onChange={handleLimitChange}
				/>
			</div>
			<DataDisplayProduct />
		</BaseLayout>
	);
}
