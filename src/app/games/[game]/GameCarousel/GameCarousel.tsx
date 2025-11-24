"use client";
import { ReactElement } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface GameCarouselProps {
	listOfImages: string[];
	onClickEach: (index: number) => any;
}

const GameCarousel = ({
	listOfImages,
	onClickEach,
}: GameCarouselProps): ReactElement => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div>
			<div
				className="flex min-h-fit w-full max-w-full overflow-hidden"
				ref={emblaRef}
			>
				<div className="flex h-full w-full">
					{Array.isArray(listOfImages) && listOfImages.length > 0
						? listOfImages.map(
								(imageName: string, index: number) => (
									<div
										onClick={() => onClickEach(index)}
										key={`${imageName} ${index}`}
										className="ml-2 mr-2 aspect-video w-[30%] min-w-52 cursor-pointer rounded-md first:ml-0 last:mr-0"
									>
										<img src={`/assets/${imageName}.png`} alt="" className="w-full h-full rounded-md" loading="lazy" />
									</div>
								),
							)
						: Array.from(Array(6).keys()).map((number: number) => (
								<div
									key={number}
									className="ml-2 mr-2 aspect-video w-[30%] min-w-52 animate-pulse cursor-pointer rounded-md bg-slate-600 first:ml-0 last:mr-0"
								>
									<Image src="#" alt="" loading="lazy"/>
								</div>
							))}
				</div>
			</div>
		</div>
	);
};

export default GameCarousel;
