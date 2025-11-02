"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LibraryCard from "./LibraryCard";

export default function Library() {
	interface GamesProps {
		Id: number;
		Name: string;
		Rate: number;
        Category: string;
	}

	const { data } = useQuery<any>({
		queryKey: ["fetch-owned-games"],
		queryFn: async (): Promise<GamesProps> => {

			try {
				const response = await axios.post(
					"/api/owned-games/",
					{},
					{
						withCredentials: true,
					},
				);

				console.log("data", response.data.data);
				return response.data.data;
			} catch (error) {
				throw error;
			}
		},
	});

	return (
		<div>
			{data &&
				data.map((data: GamesProps, index: number) => (
					<LibraryCard key={index} Name={data.Name} Rate={data.Rate} Category={data.Category} />
					// <div>test</div>
				))}
		</div>
	);
}
