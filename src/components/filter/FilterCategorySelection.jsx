import { ButtonFilter } from "../button";
import { getProductByCategory, selectGetProductCategoriesState, setCurrentCategory } from "../../store/product-dashboard";
import { SkeletonCategories } from "../skeleton";
import { useDispatch, useSelector } from "react-redux";

export function FilterCategorySelection({ limit, sort }) {
	const dispatch = useDispatch();
	const { categories, currentCategory, status: categoriesStatus } = useSelector(selectGetProductCategoriesState);

	const handleCategoryChange = (e) => {
		dispatch(setCurrentCategory(e.target.value));
		dispatch(
			getProductByCategory({
				category: e.target.value,
				limit: limit,
				sort: sort,
			})
		);
	};

	return (
		<div className="flex justify-between items-center gap-4">
			{categoriesStatus === "loading" ? (
				<SkeletonCategories count={4} />
			) : (
				categories.map((item, index) => (
					<ButtonFilter
						key={index}
						item={item}
						isActive={currentCategory === item}
						onClick={handleCategoryChange}
					/>
				))
			)}
		</div>
	);
}
