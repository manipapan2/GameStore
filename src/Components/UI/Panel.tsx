"use client";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Components/Hooks/Redux/store";
import { toggleMenu } from "@/Components/Hooks/Redux/booleanSlice";
import HomeIcon from "@mui/icons-material/Home";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { BiLibrary } from "react-icons/bi";
import SettingsIcon from "@mui/icons-material/Settings";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import styled from "@emotion/styled";

interface NavProps {
	isMenuOpen: boolean;
}

const Nav = styled.nav<NavProps>`
	height: calc(100% - 100px);
	position: fixed;
	top: 100px;
	z-index: 10;
	display: flex;
	flex-direction: column;
	background-color: var(--BgColor);
	padding: 1.25rem;
	padding-top: 2rem;
	width: 100%;
	height: 100%;
	transition: left 0.3s ease;

	left: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};

	@media (min-width: 1024px) {
		position: relative;
		top: auto;
		width: auto;
		border-right: 1px solid var(--Accent);
		left: 0; /* Override for large screens */
	}
`;

export default function Panel() {
	const dispatch = useDispatch<AppDispatch>();
	const isMenuOpen = useSelector(
		(state: RootState) => state.booleanState.value,
	);

	return (
		<Nav isMenuOpen={isMenuOpen}>
			<Box
				className="flex items-center pb-4 transition-all"
				sx={{
					paddingRight: isMenuOpen ? "12px" : "0",
					paddingLeft: isMenuOpen ? "12px" : "0",
				}}
			>
				<Box className="hidden h-[50px] lg:flex">
					<VideogameAssetIcon
						className="bg-gradient-to-r text-[var(--Purple)]"
						sx={{
							marginRight: isMenuOpen ? "16px" : "0",
							fontSize: isMenuOpen ? "3rem" : "0",
						}}
					/>
					<Typography
						variant="h3"
						className="flex items-center text-white transition-[font-size] duration-150"
						sx={{
							marginRight: isMenuOpen ? "16px" : "0",
							fontSize: isMenuOpen ? "2rem" : "0",
						}}
					>
						Unity
					</Typography>
				</Box>
				<IconButton
					onClick={() => dispatch(toggleMenu())}
					className="hidden items-center justify-center p-3 lg:flex"
				>
					{isMenuOpen ? (
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
					href="#"
					icon={
						<HomeIcon
							className="min-h-8 min-w-8 transition-[margin] duration-150"
							sx={{
								marginRight: isMenuOpen ? "16px" : "0",
							}}
						/>
					}
					label="Home"
					isMenuOpen={isMenuOpen}
				/>
				<NavLink
					href="#"
					icon={
						<VideogameAssetIcon
							className="ml-auto min-h-8 min-w-8 transition-[margin] duration-150"
							sx={{
								marginRight: isMenuOpen ? "16px" : "0",
							}}
						/>
					}
					label="Games"
					isMenuOpen={isMenuOpen}
				/>
				<NavLink
					href="#"
					icon={
						<BiLibrary
							className="min-h-8 min-w-8 transition-[margin] duration-150"
							style={{ marginRight: isMenuOpen ? "16px" : "0" }}
						/>
					}
					label="Library"
					isMenuOpen={isMenuOpen}
				/>
			</Box>
			<Box className="pb-10 pt-10">
				<Typography className="mb-2 w-fit pl-3 pr-3 text-xs font-bold text-white">
					Other
				</Typography>
				<NavLink
					href="#"
					icon={
						<SettingsIcon
							className={`${isMenuOpen ? "mr-4" : "mr-0"} min-h-8 min-w-8 transition-[margin]`}
						/>
					}
					label="Setting"
					isMenuOpen={isMenuOpen}
				/>
			</Box>
		</Nav>
	);
}

interface NavLinkProps {
	href: string;
	icon: JSX.Element;
	label: string;
	isMenuOpen: boolean;
}

function NavLink({ href, icon, label, isMenuOpen }: NavLinkProps) {
	return (
		<Link
			href={href}
			className="mb-1 mt-1 flex w-full items-center rounded-md p-3 text-slate-600 transition-all hover:bg-[var(--Purple)] hover:text-white"
		>
			{icon}
			<Typography
				className="w-full overflow-hidden font-bold transition-[font-size] duration-150"
				sx={{ fontSize: isMenuOpen ? "1rem" : "0" }}
			>
				{label}
			</Typography>
		</Link>
	);
}
