import { NextRequest, NextResponse } from "next/server";
import { GameType, GameCategoryType, categories } from "@/Types/games";
import { games } from "../(db)/games";
import { user } from "../(db)/user";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const name = searchParams.get("name");
	const search_name = searchParams.get("search_name");
	const id = searchParams.get("id");
	const rate = searchParams.get("rate");
	const category = searchParams.get("category");

	let result: GameType[] | GameType = [...games];

	if (id) {
		const idStr = id as string;

		const filteredGames = games.find((game) => game.id === idStr);

		if (filteredGames) {
			result = filteredGames;
		} else {
			return NextResponse.json(
				{
					data: "Game not found",
				},
				{
					status: 200,
				},
			);
		}
	}
	if (name) {
		const nameStr = name as string;
		const nameStrNormalized = nameStr.toLowerCase().replace(/\s+/g, "");

		const foundGame = games.filter((game) =>
			game.name
				.toLowerCase()
				.replace(/\s+/g, "")
				.includes(nameStrNormalized),
		)[0];

		if(user.games_added.includes(foundGame.id)) {
			foundGame.is_added_to_cart = true
		}

		if (foundGame) {
			console.log(foundGame);
			return NextResponse.json(foundGame, { status: 200 });
		} else {
			return NextResponse.json(
				{
					data: "Game not found",
				},
				{ status: 400 },
			);
		}
	}
	if (search_name) {
		const foundGames = [];

		// interesting
		for (let i = 0; i < games.length; i++) {
			const gameName = games[i].name;

			if (
				gameName
					.toLocaleLowerCase()
					.indexOf(search_name.toLocaleLowerCase()) > -1
			) {
				foundGames.push(games[i]);
			}
		}
		return NextResponse.json(foundGames, { status: 200 });
	}
	if (rate) {
		const rateNum = parseFloat(rate as string);

		// bug fix the rate range
		if (isNaN(rateNum) || rateNum < 0 || rateNum > 5) {
			return NextResponse.json({ error: "Wrong Rate" }, { status: 400 });
		}

		const filteredGames = result.filter(
			(game: GameType) => game.rate >= rateNum,
		);

		result = filteredGames;
	}
	if (category) {
		if (!category || !categories.includes(category as GameCategoryType)) {
			return NextResponse.json(
				{ error: "Wrong Category" },
				{ status: 400 },
			);
		}

		const filteredGames = result.filter(
			(game: GameType) => game.category == category,
		);

		result = filteredGames;
	}

	return NextResponse.json(result, { status: 200 });
}

export async function POST(req: NextRequest) {
	// interesting
	const body = await req.json();
	const { game_id } = body;

	if (!game_id) {
		return NextResponse.json(
			{ message: "game id is needed" },
			{ status: 400 },
		);
	}

	const foundGame = games.filter((game) => game.id == game_id)[0].id

	if (user.games_added.includes(foundGame)) {
		return NextResponse.json(
			{ message: "game is already added" },
			{ status: 400 },
		);
	}

	user.games_added.push(foundGame)

	return NextResponse.json(
		{ message: "game added to cart successfuly" },
		{ status: 200 },
	);
}



export async function DELETE(req: NextRequest) {
	const body = await req.json();
	const { game_id } = body;

	if (!game_id) {
		return NextResponse.json(
			{ message: "game id is needed" },
			{ status: 400 },
		);
	}

	const foundGame = games.filter((game) => game.id == game_id)[0].id

	if (!user.games_added.includes(foundGame)) {
		return NextResponse.json(
			{ message: "game does not exist in the cart" },
			{ status: 400 },
		);
	}

	const indexOfGame = user.games_added.indexOf(foundGame)
	const spliced_games = user.games_added.slice(indexOfGame - 1, 1)
	user.games_added = spliced_games;

	return NextResponse.json(
		{ message: "game removed from the cart successfuly" },
		{ status: 200 },
	);
}
