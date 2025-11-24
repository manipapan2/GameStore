import type { GameType } from "@/Types/games";


export const games: GameType[] = [
    {
        id: "412354",
        name: "Valorant",
        rate: 3.5,
        price: 0,
        category: "Hero Shooter",
        description:
            "A competitive 5v5 tactical shooter from Riot Games, blending gunplay with unique agent abilities.",
    },
    {
        id: "2841233",
        name: "Overwatch2",
        rate: 2.5,
        price: 0,
        category: "Hero Shooter",
        description:
            "A team-based hero shooter featuring a diverse cast and objective-based multiplayer action.",
    },
    {
        id: "6275643",
        name: "Assassin's Creed",
        rate: 4,
        price: 19.99,
        category: "Action-Adventure",
        description:
            "Step into the Animus and relive the memories of Altair in the original Assassin's Creed.",
    },
    {
        id: "577753",
        name: "Minecraft",
        rate: 4.4,
        price: 29.99,
        category: "Sandbox / Survival",
        description:
            "An open-ended game where you build, explore, and survive in blocky, procedurally-generated worlds.",
    },
    {
        id: "73453454",
        name: "Grand Theft Auto V",
        rate: 4.4,
        price: 29.99,
        category: "Action / Open World",
        description:
            "Play as three criminals in Los Santos in one of the most expansive open-world games ever.",
    },
    {
        id: "6464542",
        name: "Halo: Combat Evolved",
        rate: 4.3,
        price: 9.99,
        category: "First-Person Shooter",
        description:
            "Master Chief begins his fight against the Covenant in this sci-fi FPS classic.",
    },
];
