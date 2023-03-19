import { styled } from "@mui/system";
import { white, gray, slate } from "@styles/colors";

export const StyledFooter = styled("div")({
    display: "flex",
    flex: "0 0 80px",
    backgroundColor: white,
    borderTop: `1px solid ${slate[200]}`,
});

export const Form = styled("form")({
    display: "flex",
    flex: "1 1 auto",
});

export const Input = styled("input")({
    display: "block",
    width: "100%",
    height: "100%",
    padding: "0 24px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: "400",
    color: gray[900],
});

export const Button = styled("button")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "0 0 80px",
    border: "none",
    outline: "none",
    backgroundColor: white,
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "400",
    color: slate[500],

    "&:hover": {
        backgroundColor: slate[100],
    },
});
