import Wrapper from "@features/chat-room/wrapper";
import LeftSidebar from "@features/chat-room/left-sidebar";
import ChatBox from "@features/chat-room/chat-box";

const ChatRoom = () => {
    return (
        <Wrapper>
            <LeftSidebar />
            <ChatBox />
        </Wrapper>
    );
};

export default ChatRoom;
