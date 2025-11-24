import { NextRequest, NextResponse } from "next/server";
import { GameType, GameCategoryType, categories } from "@/Types/games";
import { games } from "../(db)/games"; 

const user: any = {
	name: "manipapan2",
	money: 250,
	ownedGamesIds: ["577753", "73453454"],
	gamesAddedIds: ["6464542"],
};

// export async function GET(req: NextRequest) {
//   return NextResponse.json({test: "good"}, {status: 401})
// }

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const name = searchParams.get("name");
	const id = searchParams.get("id");
	const rate = searchParams.get("rate");
	const category = searchParams.get("category");

	let result: any = [...games];

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

		if (foundGame) {
			console.log('eeeeeeee')
			console.log(foundGame)
			return NextResponse.json(
				foundGame,
				{ status: 200 },
			);
		} else {
			return NextResponse.json(
				{
					data: "Game not found",
				},
				{ status: 400 },
			);
		}
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
		if (!category || !categories.includes(category as GameCategoryType) ) {
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


	return NextResponse.json(
		result,
		{ status: 200 },
	);
}
