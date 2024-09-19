import { Button } from "@/Components/UI/button";
import GameCards from "@/Components/UI/GameCards";



export default function Home() {
	return (
		<>
			<GameCards />
			<p className="bg-red-400 text-green-600">test</p>
			<Button className="text-green-500">Test</Button>
		</>
	);
}
