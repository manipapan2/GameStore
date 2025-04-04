import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  added?: boolean;
  sx?: object;
  children: ReactNode;
}

export default function CustomButton({
  onClick,
  disabled = false,
  loading = false,
  added = false,
  sx,
  children,
}: CustomButtonProps) {
  return (
    <LoadingButton
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      loadingIndicator={
        <CircularProgress size={24} className="!text-black" />
      }
      className="cursor-pointer !text-black"
      sx={{
        bgcolor: added ? "green" : "var(--Purple)",
        pointerEvents: added ? "none" : "auto",
        "& .MuiLoadingButton-loadingIndicator": {
          display: "flex",
        },
        "& .MuiLoadingButton-label": {
          opacity: loading ? "0" : "1",
        },
        ...sx,
      }}
    >
      {children}
    </LoadingButton>
  );
}
