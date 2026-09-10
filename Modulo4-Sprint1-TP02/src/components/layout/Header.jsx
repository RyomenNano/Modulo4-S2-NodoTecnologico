const Header = ({ cantidad, abrirLista }) => (
  <header className="flex items-center justify-between border-b border-primary/40 bg-surface px-6 py-5 text-text">
    <div>
      <p className="text-2xl font-bold">Movies</p>
      <p className="text-xs text-muted">Tu catálogo personal</p>
    </div>
    <button
      type="button"
      onClick={abrirLista}
      className="relative rounded-xl border border-primary/50 px-4 py-2 font-semibold transition hover:bg-primary"
    >
      Mi lista
      {cantidad > 0 && (
        <span className="absolute -right-2 -top-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white">
          {cantidad}
        </span>
      )}
    </button>
  </header>
)

export default Header
