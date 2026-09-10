const MovieCard = ({ item, estaEnLista, toggleItem }) => (
  <article className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-lg">
    <img src={item.imagen} alt={item.nombre} className="h-72 w-full object-cover" />
    <div className="flex flex-1 flex-col gap-2 p-4 text-text">
      <h2 className="font-semibold">{item.nombre}</h2>
      <p className="text-sm text-muted">
        {item.categoria} · {item.anio} · {item.puntaje}/10
      </p>
      <button
        type="button"
        onClick={() => toggleItem(item)}
        className="mt-auto rounded-full bg-primary px-4 py-2 font-medium text-white transition hover:bg-primary-light"
      >
        {estaEnLista ? '✓ En mi lista' : '+ Agregar'}
      </button>
    </div>
  </article>
)

export default MovieCard
