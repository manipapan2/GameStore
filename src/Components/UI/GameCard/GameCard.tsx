"use client";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Typography } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/Hooks/Redux/gamesSlice";
// import Title from "../Title";
// import Button from "@/Components/UI/Button";
import { IoIosStar } from "react-icons/io";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { ToastContainer, toast } from "react-toastify";
// import Toast from "@/Utils/Toast";
import Link from "next/link";

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


	return (
		<Link
			href={`/games/${Name}`}
			className="relative z-10 m-5 flex h-fit w-full flex-col rounded-lg bg-[var(--CardColor)] outline-offset-8 outline-transparent transition-all hover:outline-none hover:outline-[3px] hover:outline-offset-0 hover:outline-white md:h-60 md:w-64"
		>
			<div className="relative aspect-video w-full">
				<Image
					src={ImageSrc}
					alt={`${Name} Image`}
					className="rounded-tl-lg rounded-tr-lg object-cover w-full h-full"
					loading="lazy"
					width={1600}
					height={900}
				/>
			</div>

			<div className="flex flex-grow flex-col justify-between rounded-bl-lg rounded-br-lg p-3">
				<div className="mb-4 flex justify-between lg:mb-0">
					<Typography color="white" className="truncate text-lg">
						{Name}
					</Typography>
					<div className="ml-2 flex items-center">
						<IoIosStar
							className="mr-[10px] text-xl"
							color="yellow"
						/>
						<Typography variant="subtitle1" color="white">
							{Rate}
						</Typography>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<Typography color="gray">{Category}</Typography>

					<Typography color="white">
						{Price === 0 ? "Free" : `${Price}$`}
					</Typography>
				</div>
			</div>
		</Link>
	);
}
