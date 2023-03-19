import PublicRoute from "@routes/PublicRoute";
import PrivateRoute from "@routes/PrivateRoute";

import Layout from "@features/auth/layout";

import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";
import Confirm from "@pages/auth/Confirm";
import Recover from "@pages/auth/Recover";
import Restore from "@pages/auth/Restore";
import Logout from "@pages/auth/Logout";

const AuthRoutes = [
    {
        element: <PublicRoute />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/registrar",
                        element: <Register />,
                    },
                    {
                        path: "/confirmar/:token",
                        element: <Confirm />,
                    },
                    {
                        path: "/recuperar",
                        element: <Recover />,
                    },
                    {
                        path: "/restaurar/:token",
                        element: <Restore />,
                    },
                ],
            },
        ],
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/logout",
                element: <Logout />,
            },
        ],
    },
];

export default AuthRoutes;
