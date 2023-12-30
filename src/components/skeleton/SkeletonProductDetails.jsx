import Skeleton from "react-loading-skeleton";

export function SkeletonProductDetails() {
	return (
		<div className="flex gap-10 w-full px-20">
			<div className="w-1/3">
				<Skeleton
					circle={true}
					width={"100%"}
					height={"100%"}
				/>
			</div>
			<div className="w-2/3">
				<div className="text-xl">
					<div className="flex gap-1 text-sm text-gray-500">
						<Skeleton
							width={100}
							height={20}
						/>
						<Skeleton
							width={50}
							height={20}
						/>
					</div>
					<Skeleton
						width={200}
						height={20}
					/>
					<Skeleton
						width={50}
						height={20}
					/>
				</div>
				<Skeleton
					count={4}
					height={20}
				/>
				<div className="mt-4 flex gap-4">
					<Skeleton
						width={100}
						height={40}
					/>
					<Skeleton
						width={100}
						height={40}
					/>
				</div>
			</div>
		</div>
	);
}
