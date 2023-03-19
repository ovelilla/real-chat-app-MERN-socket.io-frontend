import { styled } from "@mui/system";
import { white, gray, slate, lime } from "@styles/colors";

export const StyledChatBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    backgroundColor: slate[100],
});

export const Chat = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "24px",
    flex: "1 1 auto",
    overflowY: "auto",
    padding: "24px 0",
});

export const Wellcome = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    flex: "1 1 auto",
    overflowY: "auto",
    padding: "24px",

    svg: {
        width: "80px",
        height: "80px",
        color: gray[500],
    },

    span: {
        textAlign: "center",
    },
});
