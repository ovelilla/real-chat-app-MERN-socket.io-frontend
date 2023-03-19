import { useContext } from "react";
import ChatContext from "@features/chat-room/context/ChatProvider";

const useChat = () => {
    return useContext(ChatContext);
};

export default useChat;
