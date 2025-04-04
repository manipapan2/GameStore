import Banner from "@/Components/UI/Banner";
import Features from "@/Components/UI/Features";
import GameCards from "@/Components/UI/GameCards";
import OffSaleCards from "@/Components/UI/OffSaleCard";


export default function Home() {
	return (
		<>
			<Banner />
			<Features />
			<GameCards />
			<OffSaleCards />
		</>
	);
}
