import { Box, Tooltip, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function Footer() {
	return (
		// <footer className="mt-auto rounded-lg bg-[var(--color-accent)] p-4" style={{
		<footer className="mt-4 rounded-lg bg-[var(--color-accent)] p-4">
			<Box className="flex justify-between flex-wrap md:flex-row md:items-start md:justify-between">
				<div className="mt-4 md:mt-0 w-fit">
					<Typography
						variant="h4"
						className="mb-4 text-[var(--color-primary)]"
					>
						Social
					</Typography>
					<div className="flex">
						<Tooltip
							title={"Github"}
							className="mr-2 transition-all hover:cursor-pointer hover:text-[var(--color-primary)]"
						>
							<SiGithub size={30} />
						</Tooltip>
						<Tooltip
							title={"Instagram"}
							className="mr-2 transition-all hover:cursor-pointer hover:text-[var(--color-primary)]"
						>
							<AiFillInstagram size={30} />
						</Tooltip>
						<Tooltip
							title={"LinkedIn"}
							className="mr-2 transition-all hover:cursor-pointer hover:text-[var(--color-primary)]"
						>
							<FaLinkedin size={30} />
						</Tooltip>
						<Tooltip
							title={"X"}
							className="mr-2 transition-all hover:cursor-pointer hover:text-[var(--color-primary)]"
						>
							<FaSquareXTwitter size={30} />
						</Tooltip>
					</div>
				</div>

				<div className="mt-4 md:mt-0">
					<Typography
						variant="h4"
						className="mb-4 text-[var(--color-primary)]"
					>
						Support
					</Typography>
					<UnderlineLink href={"#"}>Webchat</UnderlineLink>
					<UnderlineLink href={"#"} className="mt-5">
						Ticket
					</UnderlineLink>
				</div>

				<div className="mt-4 md:mt-0">
					<Typography
						variant="h4"
						className="mb-4 text-[var(--color-primary)]"
					>
						Contact US
					</Typography>
					<UnderlineLink href={"tel:+23 2394 239 23"}>
						<i className="mr-2 text-[var(--color-primary)]">
							<FaPhoneAlt size={20} />
						</i>
						+23 2394 239 23
					</UnderlineLink>
					<UnderlineLink
						href={"mailto:test@gmail.com"}
						className="mt-5"
					>
						<i className="mr-2 text-[var(--color-primary)]">
							<MdEmail size={20} />
						</i>
						test@gmail.com
					</UnderlineLink>
					<UnderlineLink href={"#"} className="mt-5">
						<i className="mr-2 text-[var(--color-primary)]">
							<IoLocationSharp size={20} />
						</i>
						Some Address
					</UnderlineLink>
				</div>
			</Box>
			<Box className="mt-4 flex items-center">
				<i className="mr-2 text-white">
					<FaRegCopyright size={17} />
				</i>
				<Typography variant="h6" className="text-base text-slate-400">
					All Rights Reserved
				</Typography>
			</Box>
		</footer>
	);
}

interface UnderlineLinkProps {
	children: ReactNode;
	href: string;
	className?: string;
}

const UnderlineLink = ({ children, href, className }: UnderlineLinkProps) => {
	return (
		<a
			href={href}
			className={`after:contents[''] relative flex w-fit cursor-pointer text-slate-400 transition-all after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:bg-[var(--color-primary)] after:transition-all hover:text-white hover:after:w-full ${className}`}
		>
			{children}
		</a>
	);
};
