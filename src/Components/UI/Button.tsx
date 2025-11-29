import { ReactNode } from "react";
import Spinner from "./Spinner";

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
	return (
		<button
			onClick={onClick}
			onChange={onChange ? (e) => onChange(e) : null}
			disabled={disabled}
			className={`flex justify-center text-slate-200 ${disabled || isLoading ? "!bg-slate-700 pointer-events-none cursor-auto" : "bg-[var(--color-primary)] cursor-pointer"} box-border min-h-12 w-full min-w-fit items-center rounded-sm p-2 ${className}`}
		>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<span className="mr-2 !text-2xl">{Icon}</span>
					<span>{children}</span>
				</>
			)}
		</button>
	);
}
