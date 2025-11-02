import { Box, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

interface LibraryCardProps {
	Name: string;
	Rate: number;
	Category: string;
}

export default function LibraryCard({
	Name,
	Rate,
	Category,
}: LibraryCardProps) {
	return (
		<Box className="mb-7 mt-7 w-full rounded-xl bg-[var(--CardColor)] p-3 md:flex">
			<img
				className="mb-5 aspect-video w-full rounded-sm bg-slate-700 md:w-36"
				src="#"
				alt=""
			/>
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<span className="text-lg text-[var(--Purple)]">{Name}</span>
					<span className="text-lg text-white">
						<StarIcon className="text-yellow-500" /> {Rate}
					</span>
				</div>
				<span className="text-white">{Category}</span>
			</div>
			<Button
				className="mt-5 w-full"
				variant="contained"
				startIcon={<VideogameAssetIcon />}
			>
				View
			</Button>
		</Box>
	);
}
