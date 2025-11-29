"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

interface ImageSliderProps {
	images: StaticImageData[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
	const [showNumIndex, setShowNumIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowNumIndex((prev) => (prev + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="relative flex aspect-video w-full md:w-3/5 lg:w-1/3 items-center overflow-hidden">
			{images.map((image, index) => (
				<ImageComp
					key={index}
					image={image}
					Index={index}
					ActiveIndex={showNumIndex}
				/>
			))}
		</div>
	);
}

interface ImageProps {
	image: StaticImageData;
	Index: number;
	ActiveIndex: number;
}

export function ImageComp({ image, Index, ActiveIndex }: ImageProps) {
	return (
		<div
			className="absolute top-0 flex h-full w-full items-center justify-center transition-all duration-500"
			style={{
				left: ActiveIndex === Index ? "0" : "50%",
				opacity: ActiveIndex === Index ? "1" : "0",
				zIndex: ActiveIndex === Index ? "2" : "1",
			}}
		>
			<div className="aspect-square max-w-[70%] flex justify-center items-center">
				<Image
					src={image}
					alt={`Slider Image ${Index + 1}`}
					width={500}
					height={500}
					className="relative object-contain max-w-full max-h-full"
				/>
			</div>
		</div>
	);
}
