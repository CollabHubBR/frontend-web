import { createBrowserRouter, RouterProvider } from "react-router"
import { LoginPage } from "./pages/login"
import { PageDefault } from "./utils/pageDefault"

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
                        
                    }
                ]
            }
        ]
    )

    return <RouterProvider router={router} />
}
