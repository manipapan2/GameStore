import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Title from "./Title";
import { IoIosStar } from "react-icons/io";
import CustomButton from "./CustomButton";

export default function OffSaleCards() {
	return (
		<Box>
			<Title Text={"OFF Sale"} />
			<Box className="w-full rounded-[10px] bg-[var(--CardColor)] pl-6 pr-6">
				<OffSaleCard
					Text={"Valorant"}
					Rate={4.3}
					Price={100}
					OffPercent={40}
				/>
				<OffSaleCard
					Text={"Call Of Duty"}
					Rate={4.3}
					Price={1000}
					OffPercent={10}
				/>
				<OffSaleCard
					Text={"Halo"}
					Rate={4.3}
					Price={100}
					OffPercent={10}
				/>
			</Box>
		</Box>
	);
}

interface OffSaleCardProps {
	Text: string;
	Rate: number;
	Price: number;
	OffPercent: number;
}

export function OffSaleCard({
	Text,
	Rate,
	Price,
	OffPercent,
}: OffSaleCardProps) {
	return (
		<Box className="grid max-h-40 cursor-pointer grid-cols-4 grid-rows-1 border-b-[1px] border-slate-600 p-6">
			<Box className="flex h-full w-full">
				<Box className="relative aspect-video w-full">
					<Image
						src={`/Img/${Text.replace(/\s+/g, "")}.png`}
						alt={`${Text} Image`}
						fill
						className="rounded-[14px] object-cover"
					/>
				</Box>
			</Box>

			<Box className="ml-[50%] flex flex-col justify-center">
				<Typography variant="h5" className="mb-3 text-white">
					{Text}
				</Typography>
				<Box className="flex items-center">
					<IoIosStar color="yellow" className="mr-[10px] text-xl" />
					<Typography className="text-xl text-white">
						{Rate}
					</Typography>
				</Box>
			</Box>

			<Box className="text-md flex items-center justify-center">
				<Typography className="rounded-md bg-slate-900 p-3 font-bold text-[var(--Purple)]">
					-{OffPercent}%
				</Typography>
			</Box>

			<Box className="flex flex-col items-center justify-center">
				<Typography className="text-xl text-slate-950 line-through">
					{Price}$
				</Typography>
				<Typography className="text-xl text-white">
					{Price - ((OffPercent / 100) * Price)}$
				</Typography>
			</Box>
		</Box>
	);
}
