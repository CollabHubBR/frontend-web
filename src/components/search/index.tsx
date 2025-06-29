export function SearchComponent() {
  return (
    <div className="flex rounded-md overflow-hidden w-full max-w-md border border-slate-900 bg-slate-800 shadow-md">
      <input
        type="text"
        placeholder="Encontre um serviço"
        className="flex-grow px-4 py-2 bg-slate-950 text-slate-100 placeholder-gray-400 focus:outline-none"
      />
      <button className="bg-sky-600 px-4 flex items-center justify-center cursor-pointer">
        <img src="assets/svg/search.svg" alt="Buscar" className="w-5 h-5" />
      </button>
    </div>
  );
}
