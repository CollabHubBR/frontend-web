import { createBrowserRouter, RouterProvider } from "react-router"
import { LoginPage } from "./pages/login"
import { PageDefault } from "./utils/pageDefault"
import { DashboardPage } from "./pages/dashboard"

export function AppRoute() {
    const router = createBrowserRouter(
        [
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/",
                element: <PageDefault />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />
                    }
                ]
            }
        ]
    )

    return <RouterProvider router={router} />
}
