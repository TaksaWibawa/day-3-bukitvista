export function DropdownFilter({ options, onChange, defaultValue }) {
	return (
		<select
			className="border border-gray-300 rounded-md px-2 py-1  hover:bg-gray-300 hover:bg-opacity-70 duration-150 cursor-pointer"
			onChange={onChange}
			defaultValue={defaultValue}
		>
			{options.map((item, index) => (
				<option
					key={index}
					value={item.value}
				>
					{item.label}
				</option>
			))}
		</select>
	);
}
