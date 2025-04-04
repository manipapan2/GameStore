"use client";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
	Box,
	Typography,
	CircularProgress,
	Snackbar,
	Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/Components/Hooks/Redux/itemsSlice";
import Title from "./Title";
import CustomButton from "./CustomButton";
import { IoIosStar } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";

interface Game {
	Id: number;
	Name: string;
	Rate: number;
	Price: number;
}

const fetchGames = async (): Promise<Game[]> => {
	console.log("fetching!");
	try {
		const response = await axios.get("/api/games");
		if (response.data.success) {
			return Object.values(response.data.data);
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
};

export default function GameCards() {
	const query = useQuery({
		queryKey: ["games"],
		queryFn: fetchGames,
	});

	const { data, error, isLoading } = query;

	console.log("Query data:", data);

	if (isLoading) {
		return <CircularProgress className="text-[var(--Purple)]" />;
	}

	if (error) {
		return (
			<Snackbar open={true} autoHideDuration={6000}>
				<Alert severity="error">Failed to fetch game data</Alert>
			</Snackbar>
		);
	}

	const games: Game[] = Array.isArray(data) ? data : [];

	return (
		<Box className="w-full rounded-md border-transparent">
			<Title Text={"New Games"} />
			<Box className="flex h-fit w-full flex-wrap justify-center lg:justify-between">
				{games.map((game: Game) => (
					<GameCard
						key={game.Id}
						Name={game.Name}
						Rate={game.Rate}
						Price={game.Price}
					/>
				))}
			</Box>
		</Box>
	);
}

interface GameCardProps {
	Name: string;
	Rate: number;
	Price: number;
}

export function GameCard({ Name, Rate, Price }: GameCardProps) {
	const [addingToCard, setAddingToCard] = useState(false);
	const [added, setAdded] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (addingToCard) {
			const timer = setTimeout(() => {
				setAddingToCard(false);
				dispatch(addItem(Name));
				setAdded(true);
				setOpenSnackbar(true);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [addingToCard, Name, dispatch]);

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	return (
		<Box
			className="relative m-10 flex h-[260px] w-[250px] flex-col rounded-lg bg-[var(--CardColor)] transition-all lg:m-5"
			sx={{
				outlineOffset: "8px",
				outline: "3px solid transparent",
				":hover": { outline: "3px solid white", outlineOffset: "0" },
			}}
		>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={2000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity="success"
					sx={{ width: "100%" }}
				>
					{Name} Added To Cart!
				</Alert>
			</Snackbar>

			<Box className="relative aspect-video w-full">
				<Image
					src={`/Img/${Name.replace(/\s+/g, "")}.png`}
					alt={`${Name} Image`}
					layout="fill"
					objectFit="cover"
					className="rounded-tl-xl rounded-tr-xl"
				/>
			</Box>

			<Box className="flex flex-grow flex-col justify-between rounded-bl-lg rounded-br-lg p-3">
				<Box className="mb-auto flex justify-between">
					<Typography variant="h5" color="white" className="mb-2">
						{Name}
					</Typography>
					<Box className="mb-2 flex items-center">
						<IoIosStar
							className="mr-[10px] text-xl"
							color="yellow"
						/>
						<Typography variant="subtitle1" color="white">
							{Rate}
						</Typography>
					</Box>
				</Box>

				<Box className="flex items-center justify-between">
					<CustomButton
						onClick={() => setAddingToCard(true)}
						disabled={addingToCard}
						loading={addingToCard}
						added={added}
					>
						{added ? (
							<>
								<CheckIcon className="mr-[5px] text-[1.5rem]" />
								{" Added To Cart"}
							</>
						) : (
							<>
								<IoIosAddCircleOutline
									size={"2rem"}
									className="mr-[5px] text-[1.5rem]"
								/>
								{" Add To Cart"}
							</>
						)}
					</CustomButton>

					<Typography color="white">
						{Price === 0 ? "Free" : `${Price}$`}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
