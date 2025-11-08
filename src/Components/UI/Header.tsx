"use client";
import {
	Box,
	AppBar,
	IconButton,
	Badge,
	Avatar,
	Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/Hooks/Redux/booleanSlice";
import { RootState, AppDispatch } from "@/Hooks/Redux/store";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
	const dispatch = useDispatch<AppDispatch>();
	const items = useSelector((state: RootState) => state.games.items);
	const isMenuOpen = useSelector(
		(state: RootState) => state.booleanState.value,
	);

	return (
		<AppBar
			position="relative"
			className="flex h-[100px] w-full flex-row items-center justify-between border-[1px] border-l-0 border-r-0 border-t-0 border-solid border-[var(--Accent)] bg-transparent p-8 shadow-none lg:h-auto lg:justify-end pl-5 pr-5"
		>
			<IconButton
				onClick={() => dispatch(toggleMenu())}
				className="flex items-center justify-center p-3 lg:hidden"
			>
				{isMenuOpen ? (
					<IoCloseSharp className="text-3xl text-white" />
				) : (
					<HiOutlineMenuAlt4 className="text-3xl text-white" />
				)}
			</IconButton>
			<Box className="flex items-center justify-between lg:w-full">
				<Box>
					<IconButton>
						<Badge badgeContent={0} color="secondary">
							<IoMdNotificationsOutline
								className="text-2xl"
								color="white"
							/>
						</Badge>
					</IconButton>
					<Link href={"/cart"}>
						<IconButton>
							<Badge
								badgeContent={items.length}
								color="secondary"
							>
								<IoCartOutline
									className="text-2xl"
									color="white"
								/>
							</Badge>
						</IconButton>
					</Link>
				</Box>
				<Box className="ml-3 flex items-center">
					<Typography className="hidden lg:flex">
						manipapan2
					</Typography>
					<Avatar
						src="/assets/Avatar.png"
						alt="Avatar Image"
						className="ml-2 bg-[var(--Purple)]"
					/>
				</Box>
			</Box>
		</AppBar>
	);
}
