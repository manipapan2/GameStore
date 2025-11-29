"use client";
import { IconButton, Badge, Avatar, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { togglePanel } from "@/Hooks/Redux/panelSlice";
import { RootState, AppDispatch } from "@/Hooks/Redux/store";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
	const dispatch = useDispatch<AppDispatch>();
	const games = useSelector((state: RootState) => state.cart.game_ids);
	const isPanelOpen = useSelector(
		(state: RootState) => state.panelState.isPanelOpen,
	);

	return (
		<header className="flex h-[100px] w-full flex-row items-center justify-between border-[1px] border-l-0 border-r-0 border-t-0 border-solid border-[var(--color-accent)] bg-transparent p-8 pl-5 pr-5 shadow-none lg:h-auto lg:justify-end">
			<IconButton
				onClick={() => dispatch(togglePanel())}
				className="items-center justify-center p-3"
				// sx={{
				// 	display: { lg: "hidden", xs: "flex"}
				// }}

				sx={(theme) => ({
					display: {xs: "flex", lg: "none",},
				})}
			>
				{isPanelOpen ? (
					<IoCloseSharp className="text-3xl text-white" />
				) : (
					<HiOutlineMenuAlt4 className="text-3xl text-white" />
				)}
			</IconButton>
			<div className="flex items-center justify-between lg:w-full">
				<div>
					<IconButton>
						<Badge badgeContent={0} color="secondary">
							<IoMdNotificationsOutline color="white" size={25} />
						</Badge>
					</IconButton>
					<Link href={"/cart"}>
						<IconButton>
							<Badge
								badgeContent={games.length}
								color="secondary"
							>
								<IoCartOutline
									// className="text-2xl"
									color="white"
									size={25}
								/>
							</Badge>
						</IconButton>
					</Link>
				</div>
				<div className="ml-3 flex items-center">
					<Typography
						overflow={"hidden"}
						color="white"
						display={"flex"}
					>
						manipapan2
					</Typography>
					<Avatar
						src="/assets/Avatar.png"
						alt="Avatar Image"
						sx={{
							marginLeft: "0.5rem",
							background: "var(--color-primary)",
						}}
					/>
				</div>
			</div>
		</header>
	);
}
