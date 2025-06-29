import { useNavigate } from "react-router"
import { HeaderComponent } from "../../components/header"

export function LoginPage() {
    const token = localStorage.getItem("token") != null;
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "fake-token");
        navigate("/");
    }

    return (
        <div className="h-screen bg-slate-950 flex flex-col">
            <HeaderComponent token={token} />

            <div className="flex-grow flex flex-col items-center justify-center px-4">
                <h1 className="text-slate-100 text-2xl sm:text-3xl md:text-[40px] font-bold mb-6 text-center">
                    Bem Vindo
                </h1>

                <button
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-slate-100 font-medium px-6 py-3 rounded-md transition-colors duration-200 cursor-pointer"
                    onClick={handleLogin}
                >
                    Login com GitHub
                    <img
                        src="assets/svg/GithubLogo.svg"
                        alt="GitHub Logo"
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </div>
    )
}
