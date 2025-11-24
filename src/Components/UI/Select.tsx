import { FormControl, MenuItem, Select } from "@mui/material";

interface SelectProps {
	label: string;
	value: any;
	Options: OptionsProps[];
	onChange?: (e: any) => any;
}

export interface OptionsProps {
	text: string;
	value: any;
}

export default function SelectComp({
	label,
	value,
	Options,
	onChange,
}: SelectProps) {

	return (
		<div className="h-full w-full">
			<h2 className="mb-3 text-[var(--color-primary)]">{label}</h2>
			<FormControl fullWidth>
				{/* <InputLabel id={labelId}>{Title}</InputLabel> */}
				<Select
					value={value}
					defaultValue=""
					onChange={onChange ? (e) => onChange(e) : undefined}
					displayEmpty
					sx={{
						".MuiSelect-outlined": {
							color: "white",
							borderColor: "red",
						},
						".Mui-focused": {
							color: "yellow !important",
							borderColor: "red",
						},
						".MuiSvgIcon-root": {
							color: "var(--color-primary)",
						},
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "var(--color-primary)",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "var(--color-primary)",
						},
					}}
				>
					<MenuItem value="">
						<em>All</em>
					</MenuItem>
					{Options.map((option: OptionsProps, index: number) => (
						<MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
