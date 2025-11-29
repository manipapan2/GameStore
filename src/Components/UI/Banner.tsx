import ImageSlider from "./ImageSlider";
import { Box, Typography } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CustomButton from "./Button";
import Link from "next/link";
import MinecraftImage from '../../../Public/assets/MinecraftLogo.png'
import GtaImage from '../../../Public/assets/Gta.png'
import PubgImage from '../../../Public/assets/PubgLogo.png'

export default function Banner() {
	return (
		<Box className="mb-10 flex w-full flex-col-reverse items-center justify-around rounded-md bg-[var(--CardColor)] lg:flex-row">
			<Box className="p-8">
				<Typography
					variant="h4"
					className="mb-5 text-5xl text-white lg:text-5xl"
				>
					Find <span className="text-[var(--Purple)]">Whatever</span>{" "}
					suits <br /> you best &{" "}
					<span className="text-[var(--Purple)]">Play</span>
				</Typography>
				<Typography className="mb-6 text-white opacity-40">
					Enjoy And Install!
				</Typography>
				<Link href={"/games"}>
					<CustomButton>
						<VideogameAssetIcon className="mr-[5px] text-[1.5rem]" />
						View Games
					</CustomButton>
				</Link>
			</Box>
			<ImageSlider
				images={[MinecraftImage, GtaImage, PubgImage]}
			/>
		</Box>
	);
}
