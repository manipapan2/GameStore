import { Typography } from "@mui/material";

export default function Title({ Text }: {Text: string}) {
    return(
        <Typography variant="h5" className="mt-5 mb-5 text-white">
            {Text}
        </Typography>
    )
}