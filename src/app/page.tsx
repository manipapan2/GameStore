import Banner from "@/Components/UI/Banner";
import Features from "@/Components/UI/Features";
import GameCards from "@/Components/UI/GameCards";
import OffSaleCards from "@/Components/UI/OffSaleCard";
import Carousel from "./Home/Carousel/Carousel";
import Title from "@/Components/UI/Title";

export default function Home() {
	return (
		<>
			<Banner />
			<Features />
			<Title Text="Most Popular" />
			<Carousel/>
			
		</>
	);
}
