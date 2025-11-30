import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { CgPerformance } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiFillControl } from "react-icons/ai";
// import Title from "./Title";

export default function Features() {
	return (
		<div className="flex flex-col justify-between lg:flex-row">
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
		</div>
	);
}

interface FeatureCard {
	Text: string;
	Icon: ReactNode;
}

export function FeatureCard({ Text, Icon }: FeatureCard) {
	return (
		<div className="group mb-5 mt-5 h-20 w-full cursor-pointer lg:mr-4 lg:ml-4 first:ml-0 last:mr-0">
			<div className="flex h-full w-full items-center rounded-sm bg-[var(--CardColor)] p-5 transition-all duration-300 group-hover:-translate-y-3 md:p-10 lg:p-5 xl:p-10">
				<Typography className="bold text-white">{Text}</Typography>
				<div className="ml-auto min-h-8 min-w-8 text-[var(--Purple)]">
					{Icon}
				</div>
			</div>
		</div>
	);
}
