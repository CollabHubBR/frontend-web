import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchComponent } from "../search";

interface HeaderComponentProps {
  token: boolean;
}

export function HeaderComponent({ token }: HeaderComponentProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-slate-950 text-slate-100 px-6 py-3 flex items-center justify-between shadow border-b border-slate-900 relative">
      <h2 className="font-bold text-lg cursor-pointer" onClick={() => navigate("/")}>CollabHubBR</h2>

      {token && (
        <>
          <div className="hidden md:block flex-grow max-w-md mx-4">
            <SearchComponent />
          </div>

          <nav className="hidden md:flex items-center gap-6 font-medium">
            <Link to="" className="hover:underline">
              Home
            </Link>
            <Link to="" className="hover:underline">
              Explore
            </Link>
            <Link to="" className="hover:underline">
              Create
            </Link>
            <div className="bg-slate-800 p-2 rounded-md cursor-pointer hover:bg-slate-700 transition-colors">
              <img
                src="assets/svg/notification.svg"
                alt="Notificação"
                className="w-5 h-5"
              />
            </div>

            <div className="cursor-pointer">
              <img
                src="assets/image/profile.png"
                alt="Perfil"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </nav>

          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-full right-6 mt-2 w-48 bg-slate-900 rounded-md shadow-lg z-50 flex flex-col p-4 gap-4">
              <Link
                to=""
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to=""
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                to=""
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Create
              </Link>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-800 p-2 rounded-md">
                <img
                  src="assets/svg/notification.svg"
                  alt="Notificação"
                  className="w-5 h-5"
                />
                Notificações
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-800 p-2 rounded-md">
                <img
                  src="assets/image/profile.png"
                  alt="Perfil"
                  className="w-8 h-8 rounded-full object-cover"
                />
                Perfil
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
}
