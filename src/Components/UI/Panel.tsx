"use client";

import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { MdVideogameAsset } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import SettingsIcon from "@mui/icons-material/Settings";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Hooks/Redux/store";
import { togglePanel, closePanel } from "@/Hooks/Redux/panelSlice";
import { FaDownload } from "react-icons/fa6";
import { usePathname } from 'next/navigation'


export default function Panel() {
	const isPanelOpen = useSelector((state: RootState) => state.panelState.isPanelOpen)
	const dispatch = useDispatch()

	const pathName = usePathname();
	
	useEffect(() => {
	  dispatch(closePanel())
	}, [pathName])

	return (
		<nav
			className="fixed left-0 lg:!left-0 top-[100px] z-0 flex h-[calc(100%-100px)] w-full flex-col border-b-0 border-l-0 border-r-[2px] border-t-0 border-solid border-[var(--color-accent)] bg-[var(--color-background)] p-5 pt-8 transition-all md:w-1/3 lg:relative lg:top-auto lg:h-full lg:w-auto"
			style={
				{
					left: isPanelOpen ? '0px' : '-100%'
				}
			}
		>
			<Box
				className="flex items-center pb-4 transition-all"
				sx={{
					paddingRight: isPanelOpen ? "12px" : "0",
					paddingLeft: isPanelOpen ? "12px" : "0",
				}}
			>
				<Box className="hidden h-[50px] lg:flex">
					<MdVideogameAsset
						className="bg-gradient-to-r text-[var(--Purple)]"
						style={{
							marginRight: isPanelOpen ? "16px" : "0",
							fontSize: isPanelOpen ? "3rem" : "0",
						}}
					/>
					<Typography
						variant="h3"
						className="flex items-center text-white transition-[font-size] duration-150"
						sx={{
							marginRight: isPanelOpen ? "16px" : "0",
							fontSize: isPanelOpen ? "2rem" : "0",
						}}
					>
						Unity
					</Typography>
				</Box>
				<IconButton
					onClick={() => dispatch(togglePanel())}
					className="hidden items-center justify-center p-3 lg:flex"
				>
					{isPanelOpen ? (
						<IoCloseSharp className="text-3xl text-white" />
					) : (
						<HiOutlineMenuAlt4 className="text-3xl text-white" />
					)}
				</IconButton>
			</Box>
			<Typography className="mb-2 w-fit pl-3 pr-3 text-xs font-bold text-white">
				Feeds
			</Typography>
			<Box className="w-full border-b-[1px] border-slate-600 pb-10">
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
					href="/download"
					icon={
						<FaDownload
							className="min-h-8 min-w-8 transition-[margin] duration-150"
							style={{ marginRight: isPanelOpen ? "16px" : "0" }}
						/>
					}
					label="Download"
					isPanelOpen={isPanelOpen}
				/>
			</Box>
			<Box className="pb-10 pt-10">
				<Typography className="mb-2 w-fit pl-3 pr-3 text-xs font-bold text-white">
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
			</Box>
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
			className="mb-1 mt-1 flex w-full items-center rounded-md p-3 text-slate-600 transition-all hover:bg-[var(--Purple)] hover:text-white"
		>
			{icon}
			<Typography
				className="w-full overflow-hidden font-bold transition-[font-size] duration-150"
				sx={{ fontSize: isPanelOpen ? "1rem" : "0" }}
			>
				{label}
			</Typography>
		</Link>
	);
}
