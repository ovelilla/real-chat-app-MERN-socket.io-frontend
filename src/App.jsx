import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "@features/auth/context/AuthProvider";
import AuthRoutes from "@routes/AuthRoutes";
import ChatRoutes from "@routes/ChatRoutes";
import LightTheme from "@themes/LightTheme";
import Error404 from "@pages/Error404";

const router = createBrowserRouter([
    {
        element: <AuthProvider />,
        children: [
            {
                path: "/*",
                element: <Error404 />,
            },
            ...AuthRoutes,
            ...ChatRoutes,
        ],
    },
]);

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
