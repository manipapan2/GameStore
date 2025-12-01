"use client";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { MdVideogameAsset } from "react-icons/md";
import SettingsIcon from "@mui/icons-material/Settings";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Hooks/Redux/store";
import { togglePanel, closePanel } from "@/Hooks/Redux/panelSlice";
import { FaDownload } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Panel() {
	const isPanelOpen = useSelector(
		(state: RootState) => state.panelState.isPanelOpen,
	);
	const dispatch = useDispatch();

	const pathName = usePathname();

	useEffect(() => {
		dispatch(closePanel());
	}, [pathName]);

	return (
		<nav
			// bug - fix overflow-y-auto - cross size is facing a bug
			className="fixed left-0 top-[100px] z-10 flex h-[calc(100%-100px)] w-full flex-col border-b-0 border-l-0 border-r-[2px] border-t-0 border-solid border-[var(--color-accent)] bg-[var(--color-background)] p-5 pt-8 transition-all md:w-1/3 lg:relative lg:!left-0 lg:top-auto lg:h-full lg:max-w-fit max-w-full overflow-y-auto overflow-hidden"
			style={{
				left: isPanelOpen ? "0px" : "-100%",
			}}
		>
			<div
				className="hidden items-center pb-4 transition-all lg:flex"
				style={{
					paddingRight: isPanelOpen ? "12px" : "0",
					paddingLeft: isPanelOpen ? "12px" : "0",
				}}
			>
				<div className="flex h-[50px]">
					<MdVideogameAsset
						className="bg-gradient-to-r text-[var(--Purple)]"
						style={{
							marginRight: isPanelOpen ? "16px" : "0",
							fontSize: isPanelOpen ? "3rem" : "0",
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							marginRight: isPanelOpen ? "16px" : "0",
							fontSize: isPanelOpen ? "2rem" : "0",
							display: "flex",
							alignItems: "center",
							color: "white",
							transition: "font-size 150ms",
						}}
					>
						Unity
					</Typography>
				</div>
				<IconButton
					onClick={() => dispatch(togglePanel())}
					sx={{
						display: { xs: "hidden", lg: "flex" },
						margin: "auto",
						alignItems: "center",
						justifyContent: "center",
						padding: "0.75rem",
					}}
				>
					{isPanelOpen ? (
						<IoCloseSharp className="text-3xl text-white" />
					) : (
						<HiOutlineMenuAlt4 className="text-3xl text-white" />
					)}
				</IconButton>
			</div>
			<Typography
				sx={{
					marginBottom: "0.5rem",
					width: "fit",
					paddingLeft: "0.75rem",
					fontSize: "0.75rem",
					fontWeight: "bold",
					color: "white",
				}}
			>
				Feeds
			</Typography>
			<div className="w-full border-b-[1px] border-slate-600 pb-10">
				<NavLink
					href="/"
					icon={
						<HomeIcon
							className="min-h-8 min-w-8 transition-[margin] duration-150"
							sx={{
								marginRight: isPanelOpen ? "16px" : "0",
							}}
						/>
					}
					label="Home"
					isPanelOpen={isPanelOpen}
				/>
				<NavLink
					href="/games"
					icon={
						<MdVideogameAsset
							className="ml-auto min-h-8 min-w-8 transition-[margin] duration-150"
							style={{
								marginRight: isPanelOpen ? "16px" : "0",
							}}
						/>
					}
					label="Games"
					isPanelOpen={isPanelOpen}
				/>
				<NavLink
					href="/install"
					icon={
						<FaDownload
							className="min-h-8 min-w-8 transition-[margin] duration-150"
							style={{ marginRight: isPanelOpen ? "16px" : "0" }}
						/>
					}
					label="Install"
					isPanelOpen={isPanelOpen}
				/>
			</div>
			<hr className="h-[1px] w-full bg-slate-600" />
			<div className="pb-10 pt-10">
				<Typography
					sx={{
						marginBottom: "0.5rem",
						width: "fit",
						paddingLeft: "0.75rem",
						fontSize: "0.75rem",
						fontWeight: "bold",
						color: "white",
					}}
				>
					Other
				</Typography>
				<NavLink
					href="/setting"
					icon={
						<SettingsIcon
							className={`${isPanelOpen ? "mr-4" : "mr-0"} min-h-8 min-w-8 transition-[margin]`}
						/>
					}
					label="Setting"
					isPanelOpen={isPanelOpen}
				/>
			</div>
		</nav>
	);
}

interface NavLinkProps {
	href: string;
	icon: JSX.Element;
	label: string;
	isPanelOpen: boolean;
}

function NavLink({ href, icon, label, isPanelOpen }: NavLinkProps) {
	return (
		<Link
			href={href}
			className="mb-1 mt-1 flex w-full items-center justify-center rounded-md p-3 text-slate-600 transition-all hover:bg-[var(--Purple)] hover:text-white"
		>
			{icon}
			<Typography
				sx={{
					fontSize: isPanelOpen ? "1rem" : "0",
					width: "100%",
					overflow: "hidden",
					fontWeight: "bold",
					transition: "font-size 150ms",
				}}
			>
				{label}
			</Typography>
		</Link>
	);
}
