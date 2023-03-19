import useAuth from "@features/auth/hooks/useAuth";
import useChat from "@features/chat-room/hooks/useChat";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuStyled, Item } from "./styles";

const Menu = ({ stateMenu, setStateMenu }) => {
    const { logout } = useAuth();
    const { socket, setContacts } = useChat();

    const handleCloseMenu = () => {
        setStateMenu({ open: false, anchor: null });
    };

    const handleClickMenu = (e) => {
        setStateMenu({ open: false, anchor: null });
    };

    const handleLogout = () => {
        logout();

        // socket.on("user-disconnected", (userId) => {
        //     setContacts((prevUsers) => {
        //         return prevUsers.filter((user) => user.id !== userId);
        //     });
        // });
    };

    return (
        <MenuStyled
            anchorEl={stateMenu.anchor}
            open={Boolean(stateMenu.open)}
            onClose={handleCloseMenu}
            onClick={handleClickMenu}
            MenuListProps={{
                component: "nav",
            }}
        >
            <Item type="button" aria-label="logout" onClick={handleLogout}>
                <LogoutIcon />
                <span>Cerrar sesión</span>
            </Item>
        </MenuStyled>
    );
};

export default Menu;
