"use client";
import Banner from "@/Components/UI/Banner";
import Features from "@/Components/UI/Features";
// import GameCards from "@/Components/UI/GameCards";
// import OffSaleCards from "@/Components/UI/OffSaleCard";
import Carousel from "./(Home)/Carousel/Carousel";
import Title from "@/Components/UI/Title";
import { useEffect } from "react";
import GridSection from "./(Home)/GridSection/GridSection";

export default function Home() {
	useEffect(() => {
		if ("serviceWorker" in navigator && "PushManager" in window) {
			registerServiceWorker();
		}
	}, []);

	async function registerServiceWorker() {
		const registration = await navigator.serviceWorker.register("/sw.js", {
			scope: "/",
			updateViaCache: "none",
		});
	}
	return (
		<>
			<Banner />
			<Features />
			<Title Text="Most Popular" />
			<Carousel />
			<Title Text="Most Popular" />
			<GridSection />
		</>
	);
}
