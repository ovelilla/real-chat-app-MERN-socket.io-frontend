import { styled } from "@mui/system";

export const StyledHeader = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",

    [theme.breakpoints.up("lg")]: {
        alignItems: "flex-start",
    },
}));

export const Icon = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

export const Title = styled("div")({
    fontWeight: "600",
    lineHeight: "1.2",
    fontSize: "32px",
    letterSpacing: "-1px",
});
