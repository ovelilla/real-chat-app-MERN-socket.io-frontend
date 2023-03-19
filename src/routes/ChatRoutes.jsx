import PrivateRoute from "@routes/PrivateRoute";
import { ChatProvider } from "@features/chat-room/context/ChatProvider";
import ChatLayout from "@features/chat-room/layout";
import ChatRoom from "@pages/ChatRoom";

const DashboardRoutes = [
    {
        element: <PrivateRoute />,
        children: [
            {
                element: <ChatProvider />,
                children: [
                    {
                        element: <ChatLayout />,
                        children: [
                            {
                                path: "/",
                                element: <ChatRoom />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default DashboardRoutes;
