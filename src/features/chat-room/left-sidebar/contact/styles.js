import { styled } from "@mui/system";
import { white, gray, slate, lime } from "@styles/colors";

export const StyledContact = styled("button")({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px 24px",

    "&:hover": {
        backgroundColor: slate[50],
    },
});

export const Avatar = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: slate[200],
    color: gray[500],
    fontSize: "20px",
    fontWeight: "600",
});

export const Name = styled("div")({});

export const Status = styled("div")((props) => ({
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "16px",
    height: "16px",
    border: `2px solid ${white}`,
    borderRadius: "50%",
    backgroundColor: props.isConnected ? lime[500] : slate[200],
}));
