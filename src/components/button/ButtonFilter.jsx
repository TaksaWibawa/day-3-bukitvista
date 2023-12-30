import { capitalizeFirstLetter } from "../../utils/formatting/capitalizeFirstLetter";

export function ButtonFilter({ isActive, item, onClick }) {
	return (
		<button
			className={`border border-gray-300 rounded-md px-5 py-1 ${isActive ? "bg-blue-500 text-white hover:bg-blue-700" : "hover:bg-gray-300 hover:bg-opacity-70"} duration-75 cursor-pointer`}
			onClick={onClick}
			value={item}
		>
			{capitalizeFirstLetter(item)}
		</button>
	);
}
