export type GameCategoryType =
	| "Hero Shooter"
	| "First-Person Shooter"
	| "Action-Adventure"
	| "Sandbox / Survival"
	| "Action / Open World";

export type GameType = {
	id: string;
	name: string;
	rate: number;
	price: number;
	category: GameCategoryType;
	description: string;
	is_added_to_cart?: boolean;
};

export interface GamesProps {
	games: GameType[];
}



export const categories: GameCategoryType[] = ["Hero Shooter", "First-Person Shooter"];
