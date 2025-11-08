"use client";
import "./Carousel.css";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselSlide from "./CraouselSlide";
import { DotButton, useDotButton } from "./CarouselDotButton";

const Carousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	return (
		<div>
			<div
				className="flex min-h-fit w-full max-w-full overflow-hidden"
				ref={emblaRef}
			>
				<div className="flex h-full w-full">
					<CarouselSlide
						name={"Halo"}
						imageName={"6464542.png"}
						rate={"4.5"}
					/>
					<CarouselSlide
						name={"Assasins Creed"}
						imageName={"6275643.png"}
						rate={"4.5"}
					/>
					<CarouselSlide
						name={"Halo"}
						imageName={"6464542.png"}
						rate={"4.5"}
					/>
					<CarouselSlide
						name={"Assasins Creed"}
						imageName={"6275643.png"}
						rate={"4.5"}
					/>
					<CarouselSlide
						name={"Halo"}
						imageName={"6464542.png"}
						rate={"4.5"}
					/>
					<CarouselSlide
						name={"Assasins Creed"}
						imageName={"6275643.png"}
						rate={"4.5"}
					/>
				</div>
			</div>

			<div className="flex w-full items-center justify-center p-2">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						// className={'embla__dot'.concat(
						//   index === selectedIndex ? ' embla__dot--selected' : ''
						// )}
						className={`border-[2px] m-2 w-4 aspect-square rounded-full border-solid border-slate-700 ${index === selectedIndex ? "bg-[var(--color-primary)] border-[var(--color-primary)]" : ""} transition-all`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
