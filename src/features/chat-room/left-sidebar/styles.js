import { styled } from "@mui/system";
import { white, gray, slate, lime } from "@styles/colors";

export const StyledLeftSidebar = styled("div")({
    display: "flex",
    flexDirection: "column",
    flex: "0 0 340px",
    width: "340px",
    backgroundColor: white,
    borderRight: `1px solid ${slate[200]}`,
});

export const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
});

export const Footer = styled("div")({
    display: "flex",
    flex: "0 0 60px",
});
