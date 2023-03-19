import { styled } from "@mui/system";
import { white, gray, slate, lime } from "@styles/colors";

export const StyledChat = styled("button")({
    display: "grid",
    gridTemplateColumns: "48px auto auto",
    gridTemplateRows: "auto auto",
    gridColumnGap: "16px",
    gridRowGap: "0",
    padding: "16px 24px",

    "&:hover": {
        backgroundColor: slate[50],
    },
});

export const Avatar = styled("div")({
    gridRow: "1 / 3",
    gridColumn: "1 / 2",
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

export const Name = styled("div")({
    gridRow: "1 / 2",
    gridColumn: "2 / 3",
    justifySelf: "start",
    alignSelf: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100%",
});

export const LastMessage = styled("div")({
    gridRow: "2 / 3",
    gridColumn: "2 / 3",
    justifySelf: "start",
    alignSelf: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    color: gray[400],
    fontSize: "14px",
});

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

export const StyledDate = styled("div")({
    gridRow: "1 / 2",
    gridColumn: "3 / 4",
    justifySelf: "end",
    alignSelf: "center",
    color: gray[400],
    fontSize: "14px",
});

export const UnreadMessages = styled("div")({
    gridRow: "2 / 3",
    gridColumn: "3 / 4",
    justifySelf: "end",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    backgroundColor: lime[500],
    color: white,
    fontSize: "13px",
    fontWeight: "500",
});
