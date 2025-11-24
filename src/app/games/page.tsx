// import GameCard from "@/Components/UI/GameCard/GameCard";
import { Metadata } from "next";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import Games from "./games";

export const metadata: Metadata = {
	title: "Games",
	description: "Browse games",
};

async function getGames(params: any) {
	const backend_url = process.env.BACK_END_URL;
	let requestURL: string = `${backend_url}/api/games?`;
	const name: string = params.searchParams?.name;
	const category: string = params.searchParams?.category;
	const rate: string = params.searchParams?.rate;

	if (params.searchParams?.name) {
		requestURL += `name=${name}&`;
	}
	if (params.searchParams?.category) {
		requestURL += `category=${category}&`;
	}
	if (params.searchParams?.rate) {
		requestURL += `rate=${rate}`;
	}

	const res = await fetch(requestURL, {
		cache: "no-store",
	});
	const data = await res.json();
	return data;
}

export default async function GamesPage(params: any) {
	const games = await getGames(params);

	return (
		<Games
			games={games}
			categories={["Hero Shooter", "First-Person Shooter"]}
		/>
	);
}
