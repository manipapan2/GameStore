import Image from "next/image";
import { ReactElement } from "react";

export default function GridSection(): ReactElement {
	return (
		<div className="grid w-full grid-cols-4 grid-rows-4 lg:grid-rows-3">
			<div className="col-start-1 col-end-5 row-start-1 row-end-1 mb-4 h-40">
				<div className="group relative h-full w-full cursor-pointer rounded-md">
					{/* optimize add ::after instead of span */}
					<Image
						src={`/assets/412354.png`}
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
				<div className="group relative h-full w-full cursor-pointer rounded-md bg-red-500">
					<Image
						src={`/assets/577753.png`}
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
				<div className="group relative h-full w-full cursor-pointer rounded-md bg-purple-500">
					<Image
						src={`/assets/6464542.png`}
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
				<div className="group relative h-full w-full cursor-pointer rounded-md bg-blue-500">
					<Image
						src={`/assets/2841233.png`}
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
