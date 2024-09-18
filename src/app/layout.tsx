import type { Metadata } from "next";
import ReduxProvider from "@/Components/Hooks/Redux/Provider";
import localFont from "next/font/local";
import Header from "@/Components/UI/Header";
import Panel from "@/Components/UI/Panel";
import ReactQueryProvider from "@/Components/Hooks/ReactQuery/Providers";
import { Box } from "@mui/material";
import "@/app/styles/globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Game Store",
	description: "Buy and play games",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex antialiased`}
			>
				<ReduxProvider>
					<ReactQueryProvider>
						<Panel />
						<Box className="h-full w-full flex flex-col">
							<Header />
							<Box className="flex h-full w-full p-14 overflow-y-auto">{children}</Box>
						</Box>
					</ReactQueryProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
