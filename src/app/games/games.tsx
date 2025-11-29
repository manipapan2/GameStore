"use client";
import GameCard from "@/Components/UI/GameCard/GameCard";
import { useEffect, useState } from "react";
import SelectComp, { OptionsProps } from "@/Components/UI/Select";
import { FaSearch } from "react-icons/fa";
import { GameCategoryType, GamesProps, GameType } from "@/Types/games";
import { Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Games({
	games,
	categories,
}: {
	games: GamesProps;
	categories: GameCategoryType[];
}) {
	type rateNumberRange = "1" | "2" | "3" | "4";
	const [category, setCategory] = useState<
		"notLoaded" | GameCategoryType | ""
	>("");
	const searchParams = useSearchParams();
	const [rate, setRate] = useState<"notLoaded" | "" | rateNumberRange>(
		"notLoaded",
	);

	// optimize type from any to ...
	const [categoryObject, setCategoryObject] = useState<"notLoaded" | any>("notLoaded")

	const rate_list: rateNumberRange[] = ["1", "2", "3", "4"];

	const {mutate: mutateCategory} = useMutation({
		mutationFn: () => {
			return  axios.get('/api/games', {
				params: {
					rate: rate,
					category: category,
					// name: 
				}
			}).then(res => console.log(res)).catch(err => console.log('error:', err)) 

		}
	})

	useEffect(() => {
		const rateParam = searchParams.get("rate");
		if (rateParam && rate_list?.includes(rateParam as rateNumberRange)) {
			setRate(rateParam as rateNumberRange);
		} else {
			setRate("");
		}

		const categoryParam = searchParams.get("category");
		if (
			categoryParam &&
			categories?.includes(categoryParam as GameCategoryType)
		) {
			setCategory(categoryParam as GameCategoryType);
		} else {
			setCategory("");
		}
	}, []);

	useEffect(() => {
		const rateParam = searchParams.get("rate");
		if ((rate != rateParam && rate != "notLoaded") || rate != "") {
		}
	}, [rate]);

	useEffect(() => {
		const categoryParam = searchParams.get("category");
		if (
			(category != categoryParam && category != "notLoaded") ||
			category != ""
		) {
			mutateCategory()
		}
	}, [category]);

	useEffect(() => {
	  console.log('rate changed:', rate)
	}, [rate])
	

	useEffect(() => {
	  if(categories) {
		setCategoryObject(() => {
		let changedCategory: OptionsProps[] = new Array;
		
		for (let index = 0; index < categories.length; index++) {
			const element = categories[index];
			changedCategory.push({text: element, value: element})
		}

		return changedCategory
	  })
	  }
	}, [categories])
	

	return (
		<>
			<div className="relative z-50 flex w-full flex-col items-center justify-between p-1 md:flex-row">
				<div className="relative m-2 h-10 w-full flex-1 md:max-w-80">
					<i className="absolute left-3 top-[50%] translate-y-[-50%] text-[var(--color-primary)]">
						<FaSearch size={15} />
					</i>
					<input
						type="text"
						className="h-full w-full rounded-md bg-[var(--color-card)] p-3 pl-9 text-white outline-none transition-all focus:outline-[var(--color-primary)]"
						placeholder="Search..."
					/>
				</div>
				<div className="mt-2 flex w-full justify-between md:mt-0 md:w-fit">
					<div className="mr-4 w-full md:w-32">
						{categoryObject != 'notLoaded' && <SelectComp
							value={category}
							label="Category"
							Options={categoryObject}
							onChange={(e) => setCategory(e.target.value)}
						/>}
					</div>

					<div className="w-full md:w-32">
						{rate != 'notLoaded' && <SelectComp
							label="Rate"
							value={rate}
							Options={[
								{
									text: "Rate > 1",
									value: 1,
								},
								{
									text: "Rate > 2",
									value: 2,
								},
								{
									text: "Rate > 3",
									value: 3,
								},
								{
									text: "Rate > 4",
									value: 4,
								},
							]}
							onChange={(e) => setRate(e.target.value)}
						/>}
					</div>
				</div>
			</div>
			{Array.isArray(games) && games.length > 0 ? (
				<div className="flex w-full flex-wrap justify-around">
					{games.map((game: GameType) => (
						<GameCard
						key={game.id}
							Id={game.id}
							Name={game.name}
							ImageSrc={`/assets/${game.id}.png`}
							Rate={game.rate}
							Price={game.price}
							Category={game.category}
						/>
					))}
				</div>
			) : (
				// fix style and height
				<div className="flex w-full flex-grow items-center justify-center text-white">
					<Typography variant="h1">No game found</Typography>
				</div>
			)}
		</>
	);
}
