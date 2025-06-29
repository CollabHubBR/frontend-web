import { CardDashboardComponent } from "../cardDashboard"

export function DashboardComponent() {
    const cardData = [
        {
            id: 1,
            title: "{Projeto}: Nova Enquete Aberta!",
            description: "Entre Ser Ou Não Ser, Quem É Você Na Fila Do Pão?",
            iconSrc: "assets/svg/chartPieSlice.svg",
            actionText: "Participe Agora Mesmo, Antes Que O Tempo Acabe!",
        },
        {
            id: 2,
            title: "{Projeto}: Enquete Encerrada!",
            description: "Entre Ser Ou Não Ser, Quem É Você Na Fila Do Pão?",
            iconSrc: "assets/svg/chartPieSlice.svg",
            actionText: "Participe Agora Mesmo, Antes Que O Tempo Acabe!",
        },
        {
            id: 3,
            title: "Você foi mencionado no {projeto}",
            description: "Entre Ser Ou Não Ser, Quem É Você Na Fila Do Pão?",
            iconSrc: "assets/svg/at.svg",
            actionText: "Participe Agora Mesmo, Antes Que O Tempo Acabe!",
        },
    ]

    return (
        <main className="flex flex-col min-h-full px-4 py-8 max-w-screen-lg mx-auto">
            <h2 className="text-slate-100 text-3xl mb-4">Home</h2>

            <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-slate-100 text-xl">Atividades Recentes</h3>
                <div className="flex flex-col gap-4">
                    {cardData.map((card) => (
                        <CardDashboardComponent key={card.id} {...card} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-slate-100 text-xl">
                    Emblemas e Conquistas
                </h3>
                <div className="flex flex-col gap-4">
                    {/* TODO: Criar design de emblemas */}
                </div>
            </div>
        </main>
    )
}
