import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { CgPerformance } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiFillControl } from "react-icons/ai";
import Title from "./Title";

export default function Features() {
	return (
		<Box className="flex flex-col justify-between lg:flex-row">
			<FeatureCard
				Text={"Performace"}
				Icon={<CgPerformance className="h-full w-full" />}
			/>
			<FeatureCard
				Text={"Support"}
				Icon={<MdOutlineSupportAgent className="h-full w-full" />}
			/>
			<FeatureCard
				Text={"Safe"}
				Icon={<MdOutlineHealthAndSafety className="h-full w-full" />}
			/>
			<FeatureCard
				Text={"Controlable"}
				Icon={<AiFillControl className="h-full w-full" />}
			/>
		</Box>
	);
}

interface FeatureCard {
	Text: String;
	Icon: ReactNode;
}

export function FeatureCard({ Text, Icon }: FeatureCard) {
	return (
		<Box className="group mb-5 mt-5 h-20 w-full cursor-pointer lg:w-1/5">
			<Box className="flex h-full w-full items-center rounded-sm bg-[var(--CardColor)] p-5 transition-all duration-300 group-hover:-translate-y-3 md:p-10 lg:p-5 xl:p-10">
				<Typography className="bold text-white">{Text}</Typography>
				<Box className="ml-auto min-h-8 min-w-8 text-[var(--Purple)]">
					{Icon}
				</Box>
			</Box>
		</Box>
	);
}
