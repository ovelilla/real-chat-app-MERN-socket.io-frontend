import { useState } from "react";
import { StyledHeader, User, Avatar, Name, Status } from "./styles";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useAuth from "@features/auth/hooks/useAuth";
import Menu from "@features/chat-room/left-sidebar/menu";

const Header = () => {
    const [stateMenu, setStateMenu] = useState({
        open: false,
        anchor: null,
    });

    const { user } = useAuth();

    return (
        <StyledHeader>
            <User>
                <Avatar>
                    <span>{user?.name[0]}</span>
                    <Status isConnected={user?.isConnected} />
                </Avatar>
                <Name>{user?.name}</Name>
            </User>

            <IconButton
                aria-label="user-menu"
                size="large"
                onClick={(e) => setStateMenu({ open: true, anchor: e.currentTarget })}
            >
                <MoreVertIcon fontSize="inherit" />
            </IconButton>

            <Menu stateMenu={stateMenu} setStateMenu={setStateMenu} />
        </StyledHeader>
    );
};

export default Header;
