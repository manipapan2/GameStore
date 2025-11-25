import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";


interface ButtonProps {
	children: ReactNode;
  	disabled?: boolean;
	isLoading?: boolean;
	added?: boolean;
	className?: string;
	sx?: object;
	Icon?: ReactNode;
	onClick?: () => void;
	onChange?: (e: any) => any | null;
}

export default function Button({
	children,
  	disabled,
	isLoading,
	added,
	className,
	sx,
	Icon,
	onClick,
	onChange,
}: ButtonProps) {
	// return (
	// 	<LoadingButton
	// 		onClick={onClick}
	// 		onChange={onChange ? (e) => onChange(e) : null}
	// 		disabled={disabled}
	// 		loading={isLoading}
	// 		startIcon={Icon || ""}
	// 		loadingIndicator={
	// 			<CircularProgress size={24} className="!text-black" />
	// 		}
	// 		className={`cursor-pointer !text-black min-w-fit w-full min-h-12 p-2 box-border ${className}`}
	// 		sx={{
	// 			bgcolor: added ? "green" : "var(--Purple)",
	// 			pointerEvents: added ? "none" : "auto",
	// 			"& .MuiLoadingButton-loadingIndicator": {
	// 				display: "flex",
	// 			},
	// 			"& .MuiLoadingButton-label": {
	// 				opacity: isLoading ? "0" : "1",
	// 			},
	// 			...sx,
	// 		}}
	// 	>
	// 		{children}
	// 	</LoadingButton>
	// );


	return (
		<button
			onClick={onClick}
			onChange={onChange ? (e) => onChange(e) : null}
			disabled={disabled}
			className={`cursor-pointer text-black bg-[var(--color-primary)] flex justify-center items-center rounded-sm min-w-fit w-full min-h-12 p-2 box-border ${className}`}
			style={{
				opacity: isLoading ? "0" : "1",
			}}
		>
			<span className="mr-2 !text-2xl">
				{Icon}
			</span>
			<span>
				
				{children}
			</span>
		</button>
	);
}
