// import GameCard from "@/Components/UI/GameCard/GameCard";
import Head from "next/head";
import Game from "./game";
import { GameType } from "@/Types/games";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

async function getGame(params: any) {
	const backend_url = process.env.BACK_END_URL;
	let requestURL: string = `${backend_url}/api/games`

	const gameName: string = params.params?.game

	
	if(gameName) {
		requestURL += `?name=${gameName}`
	}

	

	const res = await fetch(requestURL, {
		cache: "no-store",
	});
	const data = await res.json();
	return data;
}

export default async function GamesPage(params: any) {
	const game: GameType = await getGame(params);

	return (
		<>
			<Head>
				<title>test</title>
			</Head>
			<Game game={game} />
		</>
	);
}
