import { useNavigate } from "react-router"

export function SidebarComponent() {
    const colaborations = [
        { id: 1, name: "ninhoDeMafagatos", icon: "assets/svg/arrowBendDownRight.svg" },
        { id: 2, name: "mosheh", icon: "assets/svg/warningCircle.svg" },
        { id: 3,  name: "tempesta", icon: "assets/svg/arrowBendDownRight.svg" },
        { id: 4,  name: "vuejs", icon: "assets/svg/arrowBendDownRight.svg" },
    ]
    const projects = [
        { id: 1, name: "ninhoDeMafagatos", icon: "assets/svg/arrowBendDownRight.svg" },
        { id: 2, name: "mosheh", icon: "assets/svg/warningCircle.svg" },
        { id: 3, name: "tempesta", icon: "assets/svg/arrowBendDownRight.svg" },
        { id: 4, name: "vuejs", icon: "assets/svg/arrowBendDownRight.svg" },
    ]

    const navigate = useNavigate();

    return (
        <aside className="fixed top-20 left-4 h-[calc(100vh-6rem)] w-72 bg-slate-900 text-white flex flex-col justify-between px-4 py-6 z-50 rounded-md sidebar-personalized">
            <div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">
                        Minhas Colaborações
                    </h3>
                    <div className="space-y-2 text-sm">
                        {colaborations.map(c => (
                            <div className="flex items-center gap-2 hover:bg-[#1E293B] p-2 rounded-md cursor-pointer" key={c.id} onClick={() => navigate(`/project/${c.id}`)}>
                                <img
                                    src={c.icon}
                                    alt="Colaboração"
                                />
                                <span>{c.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-slate-700 my-4" /> {/* Line */}
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">
                        Meus Projetos
                    </h3>
                    <div className="space-y-2 text-sm">
                        {projects.map(p => (
                            <div className="flex items-center gap-2 hover:bg-[#1E293B] p-2 rounded-md cursor-pointer" key={p.id} onClick={() => navigate(`/project/${p.id}`)}>
                                <img
                                    src={p.icon}
                                    alt="Projeto"
                                />
                                <span>{p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition cursor-pointer">
                    New Project
                </button>
                <div className="flex items-center gap-2 text-sm hover:bg-[#1E293B] p-2 rounded-md cursor-pointer">
                    <img src="assets/svg/supportIcon.svg" alt="Help" />
                    <span>Help and Docs</span>
                </div>
            </div>
        </aside>
    )
}
