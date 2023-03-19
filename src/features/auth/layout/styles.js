import { styled } from "@mui/system";
import { white, slate, gray } from "@styles/colors";
import { shadows } from "@styles/shadows";

export const Main = styled("main")({
    display: "flex",
    flex: "1 1 auto",
    width: "100%",
    height: "100%",
    fontSize: "16px",
});

export const ColumnLeft = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 50%",
    position: "relative",
    padding: "32px",
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up("sm")]: {
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
    },

    [theme.breakpoints.up("lg")]: {
        alignItems: "flex-end",
        padding: "96px",
        backgroundColor: theme.palette.background.paper,
    },
}));

export const ContainerLeft = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    width: "100%",
    maxWidth: "640px",
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up("sm")]: {
        maxWidth: "560px",
        padding: "48px",
        boxShadow: shadows.md,
        borderRadius: "16px",
    },

    [theme.breakpoints.up("lg")]: {
        maxWidth: "480px",
        padding: 0,
        boxShadow: "none",
        borderRadius: 0,
    },
}));

export const ColumnRight = styled("div")(({ theme }) => ({
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1 1 50%",
    position: "relative",
    padding: "32px",
    backgroundColor: slate[800],

    [theme.breakpoints.up("lg")]: {
        display: "flex",
        padding: "96px",
    },

    svg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",

        g: {
            color: slate[500],
            opacity: 0.2,
        },
    },
}));

export const ContainerRight = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    zIndex: 1,
    width: "100%",
    maxWidth: "640px",
});

export const Title = styled("h1")({
    display: "flex",
    flexDirection: "column",
    color: white,
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "1.2",
    letterSpacing: "-1px",
});

export const Text = styled("p")({
    color: gray[400],
});
