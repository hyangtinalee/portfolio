import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";

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
            {
                path: "/portfolio/projects",
                element: <Projects />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
