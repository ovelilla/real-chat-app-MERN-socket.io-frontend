import { styled } from "@mui/system";
import { white, gray, slate, lime } from "@styles/colors";

export const StyledHeader = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flex: "0 0 80px",
    padding: "0 16px 0 24px",
    backgroundColor: white,
    borderBottom: `1px solid ${slate[200]}`,
});

export const User = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "16px",
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
