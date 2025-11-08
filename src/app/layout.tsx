import ReduxProvider from "@/Hooks/Redux/Provider";
import localFont from "next/font/local";
import Header from "@/Components/UI/Header";
//test
import Panel from "@/Components/UI/Panel";
import ReactQueryProvider from "@/Hooks/ReactQuery/Providers";
import { Box } from "@mui/material";
import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/Components/UI/Footer";

// const geistSans = localFont({
// 	src: "/fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "/fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Game Store</title>
			</head>
			<body
				// className={`${geistSans.variable} ${geistMono.variable} flex antialiased`}
				className={`flex antialiased`}
			>
				<ReduxProvider>
					<ReactQueryProvider>
						<Box className="flex w-full">
							<Panel />
							<Box className="flex h-full w-full max-w-full flex-col overflow-x-hidden">
								<Header />
								<Box className="flex h-full w-full max-w-full flex-col overflow-x-hidden p-3">
									{children}
									<Footer />
								</Box>
							</Box>
						</Box>
					</ReactQueryProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
