import type { Metadata } from "next";
import ReduxProvider from "@/components/Hooks/Redux/Provider";
import localFont from "next/font/local";
import Header from "@/components/UI/Header";
import Panel from "@/components/UI/Panel";
import ReactQueryProvider from "@/components/Hooks/ReactQuery/Providers";
import { Box } from "@mui/material";
import "@/styles/globals.css";

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
						<Box className="flex h-full w-full flex-col">
							<Header />
							<Box className="flex h-full w-full overflow-y-auto p-5 lg:p-14">
								{children}
							</Box>
						</Box>
					</ReactQueryProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
