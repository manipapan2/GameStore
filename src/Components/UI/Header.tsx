"use client";
import { Box, AppBar, IconButton, Badge, Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/Components/Hooks/Redux/booleanSlice";
import { RootState, AppDispatch } from "@/Components/Hooks/Redux/store";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
	const dispatch = useDispatch<AppDispatch>();
	const items = useSelector((state: RootState) => state.items.items);
	const isMenuOpen = useSelector(
		(state: RootState) => state.booleanState.value,
	);

	return (
		<AppBar
			position="relative"
			className="flex h-[100px] w-full flex-row items-center justify-between border-b-[1px] border-[var(--Accent)] bg-transparent p-8 pl-14 pr-14 shadow-none lg:h-auto lg:justify-end"
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
			<Box className="flex items-center">
				<IconButton>
					<Badge badgeContent={0} color="secondary">
						<IoMdNotificationsOutline
							className="text-2xl"
							color="white"
						/>
					</Badge>
				</IconButton>
				<IconButton>
					<Badge badgeContent={items.length} color="secondary">
						<IoCartOutline className="text-2xl" color="white" />
					</Badge>
				</IconButton>
				<Avatar
					src="/Img/Avatar.png"
					alt="Avatar Image"
					className="ml-4 bg-[var(--Purple)]"
				/>
			</Box>
		</AppBar>
	);
}
