import ReduxProvider from "@/Hooks/Redux/Provider";
import localFont from "next/font/local";
import Header from "@/Components/UI/Header";
import Panel from "@/Components/UI/Panel";
import ReactQueryProvider from "@/Hooks/ReactQuery/Providers";
// import { Box } from "@mui/material";
import "@/styles/globals.css";
// import Head from "next/head";
import type { Metadata, Viewport } from "next";
import Footer from "@/Components/UI/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from '@mui/material/styles';
import theme from './mui-theme';

const RobotoFont = localFont({
	src: "../../Public/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf",
	variable: "--font-Roboto",
	weight: "100 900",
});
// const geistMono = localFont({
// 	src: "/fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
	title: "Home",
	description: "Find Whatever suits you best and Play",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				// className={`flex antialiased ${RobotoFont.variable}`}
				className={`flex antialiased`}
			>
				<ReduxProvider>
					<ReactQueryProvider>
						<AppRouterCacheProvider>
							<ThemeProvider theme={theme}>
								<div className="flex w-full">
									<Panel />
									<div className="flex h-full w-full max-w-full flex-col overflow-x-hidden">
										<Header />
										<div className="flex h-full w-full max-w-full flex-col overflow-x-hidden p-3">
											{children}
											<Footer />
										</div>
									</div>
								</div>
							</ThemeProvider>
						</AppRouterCacheProvider>
					</ReactQueryProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
