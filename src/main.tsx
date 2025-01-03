import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio/",
        element: <App />,
        children: [
            {
                path: "/portfolio/",
                element: <Home />,
            },
            {
                path: "/portfolio/about",
                element: <About />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
