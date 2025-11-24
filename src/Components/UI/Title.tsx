import { Typography } from "@mui/material";

export default function Title({ Text }: {Text: string}) {
    return(
        <Typography variant="h4" className="mt-5 text-3xl mb-6 text-[var(--color-primary)]">
            {Text}
        </Typography>
    )
}