import { NextApiRequest, NextApiResponse } from "next";

const games = {
	valorant: {
		Name: "Valorant",
		Rate: 4.5,
		Price: 0,
	},
	CallOfDuty: {
		Name: "Call Of Duty",
		Rate: 4.2,
		Price: 60,
	},
	Overwatch: {
		Name: "Overwatch",
		Rate: 4.8,
		Price: 0,
	},
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name } = req.query;

	if (name) {
		const gameName = (name as string).toLowerCase();

		if (gameName in games) {
			res.status(200).json({
				success: true,
				data: games[gameName as keyof typeof games],
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Game not found",
			});
		}
	} else {
		res.status(200).json({
			success: true,
			data: games,
		});
	}
}
