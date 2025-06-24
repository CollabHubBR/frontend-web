import { FollowingCardComponent } from "../followingCard"

export function SideRight() {
    const following = [
        {
            name: "Garibaldo.JS",
            description: "Framework seguro, leve e orientado...",
            language: "TypeScript",
        },
        {
            name: "memphis_depython",
            description: "Framework seguro, leve e orientado...",
            language: "Python",
        },
        {
            name: "cobolDaPeste",
            description: "Framework seguro, leve e orientado...",
            language: "Cobol",
        },
    ]
    return (
        <aside className="flex flex-col items-center gap-2 p-2">
            <h4 className="text-lg font-semibold mb-4">Following</h4>
            {following.map((item, index) => (
                <div className="mb-4" key={index}>
                    <FollowingCardComponent
                        name={item.name}
                        description={item.description}
                        language={item.language}
                    />
                </div>
            ))}
        </aside>
    )
}
