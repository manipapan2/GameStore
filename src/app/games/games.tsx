"use client";
import GameCard from "@/Components/UI/GameCard";
import Head from "next/head";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import SelectComp from "@/Components/UI/Select";
import { FaSearch } from "react-icons/fa";

interface GamesProps {
	games: any;
}

export default function Games({ games }: GamesProps) {
	type rateNumberRange = 0 | 1 | 2 | 3 | 4 | 5;
	const [category, setCategory] = useState("");
	const [rate, setRate] = useState<"" | rateNumberRange>("");

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<>
			<div className="relative z-50 flex w-full items-center justify-between p-1">
				<div className="relative m-2 h-10 max-w-72 flex-1">
					<i className="absolute left-2 top-[50%] translate-y-[-50%] text-[var(--color-primary)]">
						<FaSearch size={15} />
					</i>
					<input
						type="text"
						className="h-full w-full rounded-full bg-[var(--color-card)] p-2 pl-8 text-white outline-none  focus:outline-[var(--color-primary)] transition-all"
						placeholder="Search..."
					/>
				</div>
				<div className="flex">
					<div className="mr-4 w-32">
						<SelectComp
							value={category}
							label="Category"
							Options={[
								{
									text: "test",
									value: "test-id",
								},
							]}
							onChange={(e) => setCategory(e.target.value)}
						/>
					</div>

					<div className="w-32">
						<SelectComp
							value={rate}
							label="Rate"
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
						/>
					</div>
				</div>
			</div>
			<div className="flex w-full flex-wrap justify-around">
				{games.map((game: any) => (
					<GameCard
						Id={game.Id}
						Name={game.Name}
						ImageSrc={`/assets/${game.Id}.png`}
						Rate={game.Rate}
						Price={game.Price}
						Category={game.Category}
					/>
				))}
			</div>
		</>
	);
}
