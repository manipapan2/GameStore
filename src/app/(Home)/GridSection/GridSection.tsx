import Image from "next/image";
import { ReactElement } from "react";
import './GridSection.css'
import ValorantImage from '../../../../Public/assets/412354.png'
import MinecraftImage from '../../../../Public/assets/577753.png'
import HaloImage from '../../../../Public/assets/6464542.png'
import OverwatchImage from '../../../../Public/assets/2841233.png'

export default function GridSection(): ReactElement {
	return (
		<div className="grid w-full grid-cols-4 grid-rows-[var(--grid-template-row)] lg:grid-rows-[var(--grid-template-row-lg)]">
			<div className="col-start-1 col-end-5 row-start-1 row-end-2 mb-4 w-full aspect-[16/3]">
				<div className="group relative h-full w-full cursor-pointer rounded-md">
					{/* optimize add ::after instead of span */}
					{/* optimize add skeleton animation for images */}
					<Image
						src={ValorantImage}
						alt=""
						className="relative z-0 h-full w-full rounded-md object-cover"
						width={1600}
						height={900}
					/>
					<span className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-70 text-xl text-white transition-all group-hover:bg-opacity-60 group-hover:text-2xl">
						Enjoy
					</span>
				</div>
			</div>
			<div className="col-start-1 col-end-5 row-start-2 row-end-4 mb-4 lg:col-end-4 lg:row-end-5 lg:m-0 lg:mr-4">
				<div className="group relative h-full w-full cursor-pointer rounded-md">
					<Image
						src={MinecraftImage}
						alt=""
						className="h-full w-full rounded-md object-cover"
						width={1600}
						height={900}
					/>
					<span className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-70 text-xl text-white transition-all group-hover:bg-opacity-60 group-hover:text-2xl">
						Think
					</span>
				</div>
			</div>
			<div className="col-start-1 col-end-3 row-start-4 row-end-4 mr-2 lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-2 lg:m-0 lg:mb-2">
				<div className="group relative h-full w-full cursor-pointer rounded-md">
					<Image
						src={HaloImage}
						alt=""
						className="h-full w-full rounded-md object-cover"
						width={1600}
						height={900}
					/>
					<span className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-70 text-xl text-white transition-all group-hover:bg-opacity-60 group-hover:text-2xl">
						Play
					</span>
				</div>
			</div>
			<div className="col-start-3 col-end-5 row-start-4 row-end-4 ml-2 lg:col-start-4 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:m-0 lg:mt-2">
				<div className="group relative h-full w-full cursor-pointer rounded-md">
					<Image
						src={OverwatchImage}
						alt=""
						className="h-full w-full rounded-md object-cover"
						width={1600}
						height={900}
					/>
					<span className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-70 text-xl text-white transition-all group-hover:bg-opacity-60 group-hover:text-2xl">
						Focus
					</span>
				</div>
			</div>
		</div>
	);
}
