import GameCardSkeleton from "@/Components/UI/GameCard/GameCardSekeleton";

export default function Loading() {
	return (
		<div className="flex flex-wrap justify-around">
			{Array.from(Array(10).keys()).map((number: number) => (
				<GameCardSkeleton key={number}/>
			))}
		</div>
	);
}
