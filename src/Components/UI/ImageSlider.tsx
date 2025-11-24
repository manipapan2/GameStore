"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageSliderProps {
	ImgSrc: string[];
}

export default function ImageSlider({ ImgSrc }: ImageSliderProps) {
	const [showNumIndex, setShowNumIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowNumIndex((prev) => (prev + 1) % ImgSrc.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [ImgSrc.length]);

	return (
		<Box className="relative flex aspect-square w-full md:w-3/5 lg:w-1/3 items-center overflow-hidden">
			{ImgSrc.map((src, index) => (
				<ImageComp
					key={index}
					ImgSrc={src}
					Index={index}
					ActiveIndex={showNumIndex}
				/>
			))}
		</Box>
	);
}

interface ImageProps {
	ImgSrc: string;
	Index: number;
	ActiveIndex: number;
}

export function ImageComp({ ImgSrc, Index, ActiveIndex }: ImageProps) {
	return (
		<Box
			className="absolute top-0 flex h-full w-full items-center justify-center transition-all duration-500"
			sx={{
				left: ActiveIndex === Index ? "0" : "50%",
				opacity: ActiveIndex === Index ? "1" : "0",
				zIndex: ActiveIndex === Index ? "2" : "1",
			}}
		>
			<Box className="h-[70%] w-[70%]">
				<Image
					src={`/assets/${ImgSrc}`}
					alt={`Slider Image ${Index + 1}`}
					fill
					className="relative object-contain"
				/>
			</Box>
		</Box>
	);
}
