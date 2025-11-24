import Button from "@/Components/UI/Button";
import { Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";


export default function NotFound(): ReactElement {
    return (
        <div className="w-full h-full text-white flex flex-col items-center justify-center">
            <Typography variant="h4" sx={{fontSize: "4rem"}}>404</Typography>
            <Typography variant="h1" sx={{fontSize: "2rem", marginTop: "1rem"}}>Page not found</Typography>
            <Link href={'/'} className="w-60"><Button Icon={<AiFillHome/>} className="mt-4">Back to home</Button></Link>
        </div>
    )
}