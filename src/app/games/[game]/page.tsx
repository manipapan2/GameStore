"use client";

import Button from "@/Components/UI/Button";
import { useEffect, useState } from "react";

const Game = () => {
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);
	const [imageScale, setImageScale] = useState<number>(1);

	useEffect(() => {
		const pageContainer = document.getElementById("single-game-page");
		const parentPageContainer = pageContainer?.parentNode as HTMLElement;

		if (pageContainer && parentPageContainer) {
			parentPageContainer.addEventListener("scroll", (e: Event) =>
				setImageScale(() => {
					const scrollValue: number = (e.target as HTMLElement)
						.scrollTop;
					const scrollPercentageValue: number =
						(scrollValue * 100) /
						(parentPageContainer.scrollHeight -
							parentPageContainer.clientHeight);
					const maximumScale: number = 1.4;
					const scaleDifferece: number =
						(scrollPercentageValue * maximumScale) / 100;

					setScrollPercentage(scrollPercentageValue);

					// console.log(scaleDifferece)

					return 1 + scaleDifferece;
				}),
			);
		}
	}, []);

	return (
		<div
			id="single-game-page"
			className="rounded-md bg-[var(--color-accent)]"
		>
			<div className="relative aspect-[16/8] w-full overflow-hidden rounded-t-md md:aspect-[16/4]">
				{/* For optimization change scale to background size */}
				<img
					src="/assets/2841233.png"
					className="max-h-full w-full rounded-t-md object-cover"
					alt="test"
					style={{
						transform: `scale(${imageScale})`,
					}}
				/>
				<div
					className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-end rounded-t-md bg-black"
					style={{
						background: `rgb(0 0 0 / ${scrollPercentage / 40})`,
					}}
				>
					<div className="h-fit w-full p-2 text-white backdrop-blur-[3px] md:flex-row flex-col flex justify-between items-center" style={{
                        
                    }}>
						<div>
                            <h1 className="text-3xl md:text-4xl">Overwatch</h1>
						<h2 className="mt-2">
							ssssssssss dsds ds dsssssssssssssss
						</h2>
                        </div>
                        <div className="w-full md:w-fit md:min-w-80  mt-2 md:mt-0">
                            <Button Icon={'X'}>Add to cart</Button>
                        </div>
					</div>
				</div>
			</div>
			<div className="min-h-[1000px] w-full p-2">
				<h2 className="mb-2 text-2xl text-[var(--color-primary)]">
					Description
				</h2>
				<p className="text-white">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
					vel id pariatur dolore veritatis natus, quidem sunt adipisci
					autem beatae cum ea, earum veniam, quasi distinctio
					perferendis quia quas illum?
				</p>

				<h2 className="mb-2 mt-2 text-2xl text-[var(--color-primary)]">
					Images
				</h2>
			</div>
		</div>
	);
};

export default Game;
