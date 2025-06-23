export function HeaderComponent() {
    // TODO: Adicionar rotas para os ícones de pesquisa, caixa de entrada e usuário, após criar as páginas correspondentes.
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 border-b border-stone-300">
            <img
                src="assets/image/collabhubbr.png"
                alt="Logo CollabHubBR"
                className="w-40 sm:w-48 md:w-52"
            />

            <div className="flex gap-4">
                <img
                    src="assets/svg/search.svg"
                    alt="Search Icon"
                    className="w-6 sm:w-7 cursor-pointer"
                />
                <img
                    src="assets/svg/inbox.svg"
                    alt="Inbox Icon"
                    className="w-6 sm:w-7 cursor-pointer"
                />
                <img
                    src="assets/svg/user.svg"
                    alt="User Icon"
                    className="w-6 sm:w-7 cursor-pointer"
                />
            </div>
        </header>
    )
}
