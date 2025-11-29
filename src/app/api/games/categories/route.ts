import { NextResponse } from "next/server";
import { categories } from "@/Types/games";


export function GET() {
	return NextResponse.json(categories);
}
