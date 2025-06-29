import { DashboardComponent } from "../../components/dashboard"
import { SidebarComponent } from "../../components/sidebar"

export function DashboardPage() {
    return (
        <div className="flex flex-col md:flex-row mx-4 my-6 h-[calc(100vh-3rem)]">
            <SidebarComponent />
            <div className="flex-grow overflow-y-auto">
                <DashboardComponent />
            </div>
        </div>
    )
}

