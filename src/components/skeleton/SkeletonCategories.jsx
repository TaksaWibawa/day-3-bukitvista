import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function SkeletonCategories({ count }) {
	return (
		<SkeletonTheme
			color="#e2e2e2"
			highlightColor="#f2f2f2"
		>
			{[...Array(count)].map((index) => (
				<div
					className="border border-gray-300 rounded-md px-5 py-1 duration-75 cursor-pointer inline-block"
					key={index}
				>
					<Skeleton
						height={20}
						width={80}
					/>
				</div>
			))}
		</SkeletonTheme>
	);
}
