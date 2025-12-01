import ImageSlider from "./ImageSlider";
import { Typography } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import Button from "./Button";
import Link from "next/link";
import MinecraftImage from '../../../Public/assets/MinecraftLogo.png'
import GtaImage from '../../../Public/assets/Gta.png'
import PubgImage from '../../../Public/assets/PubgLogo.png'

export default function Banner() {
	return (
		<div className="mb-10 flex w-full p-4 flex-col-reverse items-center justify-around rounded-md bg-[var(--CardColor)] lg:flex-row">
			<div className="p-6">
				<Typography
					variant="h4"
					sx={{
						marginBottom: "1.25rem",
						fontSize: {xs: "2rem", sm: "2.5rem"},
						color: "white",

					}}
				>
					Find <span className="text-[var(--Purple)]">Whatever</span>{" "}
					suits <br /> you best &{" "}
					<span className="text-[var(--Purple)]">Play</span>
				</Typography>
				{/* <Typography sx={{
					marginBottom: "1rem",
					color: "white",
					opacity: "40%"
				}}>
					Enjoy And Install!
				</Typography> */}
				<Link href={"/games"}>
					<Button Icon={<VideogameAssetIcon/>}>
						View Games
					</Button>
				</Link>
			</div>
			<ImageSlider
				images={[MinecraftImage, GtaImage, PubgImage]}
			/>
		</div>
	);
}
