import { useNavigate } from "react-router"

interface CardDashboardProps {
    id: number
    title: string
    description: string
    iconSrc: string
    actionText: string
}

export function CardDashboardComponent({
    id,
    title,
    description,
    iconSrc,
    actionText,
}: CardDashboardProps) {
    const navigate = useNavigate()
    return (
        <div
            className="max-w-md sm:max-w-lg md:max-w-xl text-slate-100 rounded-md p-5 shadow-lg space-y-2 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors duration-300"
            onClick={() => navigate(`/project/${id}`)}
        >
            <div className="flex items-center gap-2 flex-wrap">
                <img
                    src={iconSrc}
                    alt="Ícone de gráfico"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="text-lg sm:text-xl font-semibold">
                    {title}
                </span>
            </div>

            <div className="flex gap-2 flex-wrap items-start">
                <img
                    src="assets/svg/arrow-left.svg"
                    alt="Seta"
                    className="w-5 h-5 mt-1 sm:w-6 sm:h-6"
                />
                <div className="flex flex-col">
                    <span className="text-sm sm:text-md">{description}</span>

                    <p className="text-xs sm:text-sm text-slate-500">
                        {actionText}
                    </p>
                </div>
            </div>
        </div>
    )
}
