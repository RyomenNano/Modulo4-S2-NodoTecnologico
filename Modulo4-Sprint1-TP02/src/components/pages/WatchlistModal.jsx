const WatchlistModal = ({ lista, toggleItem, cerrarLista }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
    <section className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-surface p-6 text-text">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mi lista</h2>
        <button type="button" onClick={cerrarLista} className="text-2xl text-muted hover:text-text">
          ×
        </button>
      </div>
      {lista.length === 0 ? (
        <p className="py-10 text-center text-muted">
          Todavía no agregaste nada, buscá algo arriba 👆
        </p>
      ) : (
        <div className="space-y-3">
          {lista.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-background p-3">
              <span>{item.nombre}</span>
              <button
                type="button"
                onClick={() => toggleItem(item)}
                className="rounded-lg border border-primary/50 px-3 py-1 text-sm hover:bg-primary"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  </div>
)

export default WatchlistModal
