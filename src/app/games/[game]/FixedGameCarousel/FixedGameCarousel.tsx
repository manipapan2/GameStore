import { ReactElement, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import IconButton from "@mui/material/IconButton";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const options: EmblaOptionsType = {
	align: "center",
	containScroll: false,
	loop: true,
};

interface FixedGameCarouselProps {
	listOfImageName: string[];
	selectedSlideIndex: number;
	disabled: boolean;
	onClose: () => void;
}

const FixedGameCarousel = ({
	listOfImageName,
	selectedSlideIndex,
	disabled,
	onClose,
}: FixedGameCarouselProps): ReactElement => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

	useEffect(() => {
		console.log(selectedSlideIndex);
		emblaApi?.scrollTo(selectedSlideIndex, true);
	}, [selectedSlideIndex]);

	return (
		<div
			className="relative flex h-full w-full items-center"
			onClick={() => {
				onClose();
			}}
		>
			<IconButton
				onClick={(e) => {
					emblaApi?.scrollPrev();
					e.stopPropagation();
				}}
				sx={{
					position: "absolute",
					left: "30px",
					aspectRatio: "1/1",
					zIndex: "101",
					padding: "0.6rem",
					backgroundColor: "white",
					outline: "2px solid transparent",
					color: "black",
					":hover": {
						backgroundColor: "var(--color-primary)",
						outlineColor: "black",
					},
				}}
			>
				<IoIosArrowBack size={20} />
			</IconButton>

			<IconButton
				onClick={(e) => {
					emblaApi?.scrollNext();
					e.stopPropagation();
				}}
				sx={{
					position: "absolute",
					right: "30px",
					aspectRatio: "1/1",
					zIndex: "101",
					padding: "0.6rem",
					backgroundColor: "white",
					outline: "2px solid transparent",
					color: "black",
					":hover": {
						backgroundColor: "var(--color-primary)",
						outlineColor: "black",
					},
				}}
			>
				<IoIosArrowForward size={20} />
			</IconButton>

			<div className="z-[100] flex min-w-full max-w-full" ref={disabled ? null : emblaRef}>
				{/* {
                Array.from(Array(10).keys()).map((number: number) => (
                    <div className="min-w-[30%] h-[30%] flex justify-center items-center z-[100]">
                        <img src="/assets/412354.png" alt="" className="min-w-[80%] max-w-[80%] lg:min-w-[60%] lg:max-w-[60%] aspect-video rounded-md" />
                    </div>
                ))
            } */}
				<div className="flex h-full w-full">
					{listOfImageName.map((Image: string) => (
						<div
							key={`fixed image key: ${Image}`}
							className="z-[100] flex h-full min-w-full select-none items-center justify-center"
							style={{
								pointerEvents: "none !important" as any,
							}}
						>
							<img
								onClick={(e) => {
									e.stopPropagation();
								}}
								src={`/assets/${Image}.png`}
								alt={``}
								className="aspect-video min-w-[80%] max-w-[80%] rounded-md lg:min-w-[60%] lg:max-w-[60%]"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FixedGameCarousel;
