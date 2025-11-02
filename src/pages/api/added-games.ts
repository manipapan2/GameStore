// import { games, user } from "@/app/db";
// import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// 	if (req.method == "GET") {
// 		const addedGames = games.filter((game) =>
// 			game.Id.includes(user.gamesAddedIds),
// 		);

// 		res.status(200).json({
// 			data: addedGames,
// 		});
// 	} else if (req.method == "DELETE") {
// 		const { id } = req.body;

// 		if (id) {
// 			user.gamesAddedIds = user.gamesAddedIds.filter(
// 				(gameId) => gameId !== id,
// 			);

// 			console.log(user.gamesAddedIds);
// 		}

// 		res.status(200).json({
// 			data: `Game Deleted Successfully`,
// 		});
// 	} else {
// 		res.status(405).json({
// 			data: "wrong method",
// 		});
// 	}
// }
