import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { capitalizeFirstLetter } from "../../utils/formatting/capitalizeFirstLetter";

const HEADS = ["title", "description", "category", "price", "rating"];
const tableBodyStyle = "text-center p-2 border-x border-gray-200";

export const SkeletonTable = ({ count }) => {
	return (
		<SkeletonTheme
			color="#e2e2e2"
			highlightColor="#f2f2f2"
		>
			<div className="border border-gray-300 rounded-md">
				<table className="border-none max-w-[1000px]">
					<thead>
						<tr className="rounded-md">
							{HEADS?.map((item, index) => (
								<th
									className={`py-3 px-10 rounded-t-md border-b border-gray-300 bg-white w-3/6 border-e`}
									key={index}
								>
									{capitalizeFirstLetter(item)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{[...Array(count)].map((_item, index) => (
							<tr
								className={`hover:bg-gray-300 hover:bg-opacity-70 duration-150 cursor-pointer ${index % 2 === 1 ? "bg-gray-200" : "bg-white"}`}
								key={index}
							>
								<td className={`${tableBodyStyle} w-1/6`}>
									<Skeleton count={2} />
								</td>
								<td className={`${tableBodyStyle} w-3/6`}>
									<Skeleton
										count={4}
										height={20}
										style={{ marginBottom: "0.5rem" }}
									/>
								</td>
								<td className={`${tableBodyStyle} w-1/6 `}>
									<Skeleton count={2} />
								</td>
								<td className={`${tableBodyStyle} w-1/6 `}>
									<Skeleton count={2} />
								</td>
								<td className={`${tableBodyStyle} w-1/6 `}>
									<Skeleton count={2} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</SkeletonTheme>
	);
};
