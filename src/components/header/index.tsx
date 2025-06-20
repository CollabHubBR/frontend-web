export function HeaderComponent() {
    // TODO: Adicionar rotas para os ícones de pesquisa, caixa de entrada e usuário, após criar as páginas correspondentes.
    return (
        <header className="flex justify-between items-center p-4 border-b border-stone-300">
            {/* Adicionar a logo aqui */}
            <img src="" alt="" />

            <div className="flex gap-4">
                <img
                    src="assets/svg/search.svg"
                    alt=""
                    className="w-7 cursor-pointer"
                />
                <img
                    src="assets/svg/inbox.svg"
                    alt=""
                    className="w-7 cursor-pointer"
                />
                <img
                    src="assets/svg/user.svg"
                    alt=""
                    className="w-7 cursor-pointer"
                />
            </div>
        </header>
    )
}
