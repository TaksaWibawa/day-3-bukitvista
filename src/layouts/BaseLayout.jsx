export function BaseLayout(props) {
	return <section className={`flex flex-col items-center bg-gray-100 ${props.className}`}>{props.children}</section>;
}
