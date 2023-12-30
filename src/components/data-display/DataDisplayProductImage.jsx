export function DataDisplayProductImage({ src, alt }) {
	return (
		<div className="w-1/3">
			<img
				className="w-1/2 h-full object-contain mx-auto"
				src={src}
				alt={alt}
			/>
		</div>
	);
}
