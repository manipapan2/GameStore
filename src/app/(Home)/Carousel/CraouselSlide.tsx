import Image, { StaticImageData } from "next/image";
import { IoIosStar } from "react-icons/io";

interface CarouselSlideProps {
	image: StaticImageData;
	name: string;
	rate: string;
}

const CarouselSlide = ({ image, name, rate }: CarouselSlideProps) => {
	return (
		<div
			className={`group relative ml-3 mr-3 h-96 min-w-[250px] cursor-pointer rounded-md bg-[var(--color-accent)] first:ml-0 first:mr-3 last:ml-3 last:mr-0`}
		>
			<Image
				src={image}
				alt={`${name} image`}
				width={1600}
				height={900}
				className="h-full w-full select-none rounded-md object-cover hover:cursor-pointer"
			/>

			<div className="absolute bottom-0 left-0 z-10 flex w-full justify-between p-4 text-xl text-white select-none">
				<span className="mr-2 translate-y-[12px] truncate opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
					{name}
				</span>

				<span className="flex translate-y-[12px] items-center opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
					<IoIosStar size={24} className="mr-2 text-yellow-500" />
					{rate}
				</span>
			</div>

			<span className="absolute bottom-0 left-0 z-0 h-full w-full bg-black bg-opacity-0 transition-all duration-200 group-hover:bg-opacity-60"></span>
		</div>
	);
};

export default CarouselSlide;
