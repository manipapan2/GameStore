"use client";

import CartCard from "@/app/cart/CartCard";
import { RootState } from "@/Hooks/Redux/store";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
	const games = useSelector((state: RootState) => state.cart.game_ids);



	// const { data, isLoading } = useQuery<any>({
	// 	queryKey: ["fetchuserinfo"],
	// 	queryFn: async (): Promise<any> => {
	// 		const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
	// 		try {
	// 			const response = await axios.post("api/games/", {});
	// 			return response;
	// 		} catch (error) {
	// 			throw error;
	// 		}
	// 	},
	// });

	return (
		<div>
			{games}
			{Array.isArray(games) && games.length > 0 ? (
				games.map((game: any) => <CartCard key={game.Id} Name={game.Id} />)
			) : (
				<div className="flex h-full w-full items-center justify-center">
					<h1 className="text-white">No Games Added For Now</h1>
				</div>
			)}
		</div>
	);
}
