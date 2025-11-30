import { Tooltip, Typography } from "@mui/material";
import React, { ReactNode } from "react";
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
		// <footer className="mt-4 rounded-lg bg-[var(--color-accent)] p-4">
		<footer className="mt-4 rounded-lg p-4 z-0 relative">
			<div className="flex justify-between flex-wrap md:flex-row md:items-start md:justify-between">
				<div className="mt-4 md:mt-0 w-fit">
					<Typography
						variant="h4"
						sx={{
							fontSize: "1.875rem ",
							marginBottom: "1rem",
							color: "var(--color-primary)"
						}}
					>
						Social
					</Typography>
					<div className="flex">
						<Tooltip
							title={"Github"}
						>
							<SiGithub size={30} className="cursor-pointer mr-2 transition-all text-slate-500 hover:text-[var(--color-primary)]"/>
						</Tooltip>
						<Tooltip
							title={"Instagram"}
						>
							<AiFillInstagram size={30} className="cursor-pointer mr-2 transition-all text-slate-500 hover:text-[var(--color-primary)]"/>
						</Tooltip>
						<Tooltip
							title={"LinkedIn"}
						>
							<FaLinkedin size={30} className="cursor-pointer mr-2 transition-all text-slate-500 hover:text-[var(--color-primary)]"/>
						</Tooltip>
						<Tooltip
							title={"X"}
						>
							<FaSquareXTwitter size={30} className="cursor-pointer transition-all text-slate-500 hover:text-[var(--color-primary)]"/>
						</Tooltip>
					</div>
				</div>

				<div className="mt-4 md:mt-0">
					<Typography
						variant="h4"
						sx={{
							fontSize: "1.875rem ",
							marginBottom: "1rem",
							color: "var(--color-primary)"
						}}
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
						sx={{
							fontSize: "1.875rem ",
							marginBottom: "1rem",
							color: "var(--color-primary)"
						}}
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
			</div>
			<div className="mt-4 flex items-center">
				<i className="mr-2 text-white">
					<FaRegCopyright size={17} />
				</i>
				<Typography variant="h6" sx={{
					fontSize: "1rem",
					color: "oklch(55.4% 0.046 257.417)"
				}}>
					All Rights Reserved
				</Typography>
			</div>
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
