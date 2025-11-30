import { Typography } from "@mui/material";

export default function Title({ Text }: {Text: string}) {
    return(
        <Typography variant="h4" sx={{
            marginTop: "1.25rem",
            fontSize: "1.875rem",
            marginBottom: "1.5rem",
            color: "var(--color-primary)"
        }}>
            {Text}
        </Typography>
    )
}