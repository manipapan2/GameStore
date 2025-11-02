"use client";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
	Box,
	Snackbar,
	Alert,
} from "@mui/material";
import Title from "./Title";
import Skeleton from "./Skeleton";
import GameCard from "@/Components/UI/GameCard";

interface Game {
	Id: number;
	Name: string;
	Rate: number;
	Price: number;
	Category: string;
}

export default function GameCards() {
	const { data, error, isLoading } = useQuery({
		queryKey: ["games"],
		queryFn: async (): Promise<Game[]> => {
			console.log("fetching!");
			try {
				const response = await axios.get("/api/games");
				if (response?.data?.data) {
					return response.data.data
				} else {
					throw new Error("Failed to fetch game data");
				}
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error(
						"Error fetching data:",
						error.response?.data || error.message,
					);
				} else {
					console.error("Unexpected error:", error);
				}
				throw new Error("Failed to fetch game data");
			}
		},
	});

	console.log("Query data:", data);

	if (error) {
		return (
			<Snackbar open={true} autoHideDuration={6000}>
				<Alert severity="error">Failed to fetch game data</Alert>
			</Snackbar>
		);
	}

	const games: Game[] = Array.isArray(data) ? data : [];

	console.log(games);

	return (
		<Box className="w-full rounded-md border-transparent">
			<Title Text={"New Games"} />

			{data && Array.isArray(data) ? (
				<Box className="flex h-fit w-full flex-wrap justify-center lg:justify-between">
					{games.map((game: Game) => (
						<GameCard
							key={game.Id}
							Id={String(game.Id)}
							ImageSrc={`/assets/${game.Id}/.png`}
							Name={game.Name}
							Rate={game.Rate}
							Price={game.Price}
							Category={game.Category}
							
						/>
					))}
				</Box>
			) : (
				<Box className="flex h-fit w-full flex-wrap justify-center lg:justify-between">
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton className="m-10 h-72 w-64" key={i} />
					))}
				</Box>
			)}
		</Box>
	);
}

