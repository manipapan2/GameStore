import { NextRequest, NextResponse } from "next/server";
import { categories } from "@/Types/games";


export function GET(req: NextRequest) {
	return NextResponse.json(categories);
}
