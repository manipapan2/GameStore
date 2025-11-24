"use client";

import Button from "@/Components/UI/Button";
import { useEffect, useState } from "react";
import GameCarousel from "./GameCarousel/GameCarousel";
import FixedGameCarousel from "./FixedGameCarousel/FixedGameCarousel";
import { GameType } from "@/Types/games";
import Image from "next/image";

const Game = ( { game }: { game: GameType } ) => {
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const [imageScale, setImageScale] = useState<number>(1);
    const [isFixedGameCarouselOpen, setIsFixedGameCarouselOpen] =
        useState<boolean>(false);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);

    const mockGameIdArray: string[] = ["412354", "2841233", "577753", "6464542", "73453454"]

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

                    return 1 + scaleDifferece;
                }),
            );
        }
    }, []);

    useEffect(() => {
      console.log('is fixed open', isFixedGameCarouselOpen)
    }, [isFixedGameCarouselOpen])
    

    return (
        <div
            id="single-game-page"
            className="rounded-md bg-[var(--color-accent)]"
        >
            <div
                className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-indigo-600 bg-opacity-10 text-white backdrop-blur-lg transition-all"
                style={{
                    opacity: isFixedGameCarouselOpen ? "1" : "0",
                    pointerEvents: isFixedGameCarouselOpen ? "auto" : "none",
                }}
            >
                <FixedGameCarousel
                    listOfImageName={mockGameIdArray}
                    selectedSlideIndex={selectedSlideIndex}
                    disabled={!isFixedGameCarouselOpen}
                    onClose={() => setIsFixedGameCarouselOpen((prev) => !prev)}
                    
                />
            </div>

            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-t-md md:aspect-[16/4] !pointer-events-none" >
                {/* For optimization change scale to background size */}
                {/* <img
                    src={`/assets/${game.id}.png`}
                    className="max-h-full w-full select-none rounded-t-md object-cover"
                    alt="test"
                    // width={500}
                    // height={500}
                    // quality={100}
                    // cover
                    style={{
                        transform: `scale(${imageScale})`,
                        opacity: `${1 - (scrollPercentage / 100)}`,
                    }}
                /> */}
                <Image
                    src={`/assets/${game.id}.png`}
                    className="max-h-full w-full select-none rounded-t-md object-cover"
                    alt="test"
                    width={1600}
                    height={900}
                    quality={100}
                    // cover
                    style={{
                        transform: `scale(${imageScale})`,
                        opacity: `${1 - (scrollPercentage / 100)}`,
                    }}
                />
            </div>
            <div className="w-full p-2">
                <div className="flex h-fit w-full flex-col items-center justify-between p-2 text-white backdrop-blur-[3px] md:flex-row">
                    <div>
                        <h1 className="text-3xl md:text-4xl">{game.name}</h1>
                        <h2 className="mt-2">
                            {game.category}
                        </h2>
                    </div>
                    <div className="mt-2 w-full md:mt-0 md:w-fit md:min-w-80">
                        <Button Icon={"X"}>Add to cart</Button>
                    </div>
                </div>
                <h2 className="mb-3 mt-4 text-2xl text-[var(--color-primary)]">
                    Description
                </h2>
                <p className="text-white">
                    {game.description}
                </p>

                <div>
                    <h2 className="mb-3 mt-4 text-2xl text-[var(--color-primary)]">
                        Images
                    </h2>
                    <GameCarousel
                        listOfImages={mockGameIdArray}
                        onClickEach={(index: number) => {
                            setSelectedSlideIndex(index);
                            setIsFixedGameCarouselOpen(true);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Game;
