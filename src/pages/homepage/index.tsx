import { Feed } from "../../components/feed"
import { SideLeft } from "../../components/sideLeft"
import { SideRight } from "../../components/sideRight"

export function Homepage() {
    return (
        <main className="grid grid-cols-[325px_1fr_325px] h-screen">
            <aside className="sticky top-0 h-screen overflow-auto border-r border-gray-200 p-4">
                <SideLeft />
            </aside>

            <section className="overflow-y-auto p-4">
                <Feed />
            </section>

            <aside className="sticky top-0 h-screen overflow-auto border-l border-gray-200 p-4">
                <SideRight />
            </aside>
        </main>
    )
}
