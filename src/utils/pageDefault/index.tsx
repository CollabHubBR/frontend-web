import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { HeaderComponent } from "../../components/header";

export function PageDefault() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token") != null;

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) return null;

    return (
        <div className="bg-slate-950 min-h-screen">
            <HeaderComponent token={token} />
            <Outlet />
        </div>
    );
}
