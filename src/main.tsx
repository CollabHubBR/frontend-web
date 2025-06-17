import { createRoot } from "react-dom/client"
import "./styles/Index.css"
import App from "./App.tsx"
import { BrowserRouter, Route, Routes } from "react-router"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
)
