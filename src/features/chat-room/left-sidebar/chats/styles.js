import { styled } from "@mui/system";
import { white, gray, slate } from "@styles/colors";

export const StyledChats = styled("div")({
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    overflowY: "auto",
    padding: "16px 0",
});

export const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    overflowY: "auto",
});

export const Title = styled("div")({
    padding: "16px 24px",
    color: gray[500],
});

export const Message = styled("div")({
    padding: "16px 24px",
});
