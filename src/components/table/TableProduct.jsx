import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/formatting/capitalizeFirstLetter";
import { truncateContent } from "../../utils/formatting/truncateContent";

const TABLE_HEADS = ["title", "description", "category", "price", "rating"];
const tableBodyStyle = "text-center p-2 border-x border-gray-200";

export const TableProduct = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="border border-gray-300 rounded-md">
				<table className="border-none max-w-[1000px]">
					<thead>
						<tr className="rounded-md">
							{TABLE_HEADS?.map((item, index) => (
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
						{data.length === 0 ? (
							<tr>
								<td
									colSpan="4"
									className="p-4 text-center font-semibold"
								>
									No data found
								</td>
							</tr>
						) : (
							data?.map((item, index) => (
								<tr
									className={`hover:bg-gray-300 hover:bg-opacity-70 duration-150 cursor-pointer ${index % 2 === 1 ? "bg-gray-200" : "bg-white"}`}
									key={index}
									onClick={() => navigate(`/product-dashboard/${item.id}`)}
								>
									<td className={`${tableBodyStyle} w-1/6 `}>{item.title}</td>
									<td className={`${tableBodyStyle} w-3/6`}>{truncateContent(item.description)}</td>
									<td className={`${tableBodyStyle} w-1/6 `}>{capitalizeFirstLetter(item.category)}</td>
									<td className={`${tableBodyStyle} w-1/6 `}>{item.price}</td>
									<td className={`${tableBodyStyle} w-1/6 `}>
										{item.rating.rate}
										<span className="text-gray-400 text-sm ms-1">({item.rating.count})</span>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};
