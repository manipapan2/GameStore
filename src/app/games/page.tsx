import GameCard from "@/Components/UI/GameCard";
import Head from "next/head";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Games from "./games";

async function getGames() {
	const backend_url = process.env.BACK_END_URL;
	const res = await fetch(`${backend_url}/api/games`, {
		cache: "no-store",
	});
	const data = await res.json();
	return data.data;
}


export default async function GamesPage() {
	const games = await getGames();

	return (
		<div>
			<Head>
				<title>test</title>
			</Head>
			<Games games={games}/>
		</div>
	);
}
