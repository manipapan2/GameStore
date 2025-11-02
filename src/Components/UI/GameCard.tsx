"use client";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/Hooks/Redux/gamesSlice";
import Title from "./Title";
import Button from "@/Components/UI/Button";
import { IoIosStar } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import Skeleton from "./Skeleton";
import { ToastContainer, toast } from 'react-toastify';
import Toast from "@/Utils/Toast";

interface GameCardProps {
	Id: string;
	Name: string;
	Rate: number;
	Price: number;
	ImageSrc: string;
	Category: string;
}

export default function GameCard({
	Id,
	Name,
	ImageSrc,
	Rate,
	Price,
	Category,
}: GameCardProps) {
	const [addingToCard, setAddingToCard] = useState(false);
	const [added, setAdded] = useState(false);
	const dispatch = useDispatch();

    // const tostTest = Toast({Text: 'test', Mode: 'success'})

	useEffect(() => {
		if (addingToCard) {
			const timer = setTimeout(() => {
				setAddingToCard(false);
				dispatch(addItem(Id));
				setAdded(true);

                Toast({Text: 'test', Mode: 'success'})

			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [addingToCard, Name, dispatch]);

	return (
		<Box
			className="relative z-10 m-5 flex h-fit flex-col rounded-lg bg-[var(--CardColor)] transition-all w-full md:w-64 md:h-72"
			sx={{
				outlineOffset: "8px",
				outline: "3px solid transparent",
				":hover": { outline: "3px solid white", outlineOffset: "0" },
			}}
		>
			<Box className="relative aspect-video w-full">
				<Image
					src={ImageSrc}
					alt={`${Name} Image`}
					layout="fill"
					objectFit="cover"
					className="rounded-tl-xl rounded-tr-xl"
                    loading="lazy"
				/>
			</Box>

			<Box className="flex flex-grow flex-col justify-between rounded-bl-lg rounded-br-lg p-3">
				<Box className="mb-1 flex justify-between">
					<Typography
						color="white"
						className="flex truncate text-lg"
					>
						{Name}
					</Typography>
					<Box className="flex items-center ml-2">
						<IoIosStar
							className="mr-[10px] text-xl"
							color="yellow"
						/>
						<Typography variant="subtitle1" color="white">
							{Rate}
						</Typography>
					</Box>
				</Box>

				<Box className="flex mb-4 items-center justify-between">
					<Typography color="gray">{Category}</Typography>

					<Typography color="white">
						{Price === 0 ? "Free" : `${Price}$`}
					</Typography>

				</Box>

				<Button
					onClick={() => setAddingToCard(true)}
					disabled={addingToCard}
					isLoading={addingToCard}
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
				</Button>
			</Box>
		</Box>
	);
}
