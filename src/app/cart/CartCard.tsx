import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";

interface CartCardProps {
	Name: string | number;
}

export default function CartCard({ Name }: CartCardProps) {
	return (
		<div className="flex h-fit w-full bg-[var(--CardColor)]">
			<div className="relative aspect-video w-1/3">
				{/* <Image
					src={`/assets/${Name.replace(/\s+/g, "")}.png`}
					alt={`${Name} Image`}
					layout="fill"
					objectFit="cover"
					className="h-full w-full"
				/> */}
			</div>
			<div className="flex-col">
				<Typography>{Name}</Typography>
				<LoadingButton
					// onClick={() => setAddingToCard(true)}
					// disabled={addingToCard}
					// loading={addingToCard}
					// loadingIndicator={
					// 	<CircularProgress size={24} className="!text-black" />
					// }
					className="cursor-pointer !text-white mt-auto"
					// sx={{
					// 	bgcolor: added ? "green" : "var(--Purple)",
					// 	pointerEvents: added ? "none" : "auto",
					// 	"& .MuiLoadingButton-loadingIndicator": {
					// 		display: "flex",
					// 	},
					// 	"& .MuiLoadingButton-label": {
					// 		opacity: addingToCard ? "0" : "1",
					// 	},
					// }}
				>
					{/* {added ? (
					<CheckIcon />
				) : (
					<IoIosAddCircleOutline size={"2rem"} className="mr-[5px]" />
				)}
				{added ? "Added To Cart" : "Add To Cart"} */}
					Remove From Cart
				</LoadingButton>
			</div>
		</div>
	);
}
