import { styled } from "@mui/system";
import { white, gray, slate } from "@styles/colors";

export const Row = styled("div")({});

export const Container = styled("div")((props) => ({
    display: "flex",
    justifyContent: props.type === "out" ? "flex-end" : "flex-start",
    padding: "0 24px",
}));

export const Bubble = styled("div")((props) => ({
    maxWidth: "60%",
    padding: "8px 16px",
    borderRadius: "8px",
    backgroundColor: props.type === "out" ? slate[200] : white,
    wordBreak: "break-word",
}));
