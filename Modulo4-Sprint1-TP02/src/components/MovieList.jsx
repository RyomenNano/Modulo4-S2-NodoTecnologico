import { items } from '../data/items'
import MovieCard from './MovieCard'

const MovieList = ({ busqueda, lista, toggleItem }) => {
  const itemsFiltrados = items.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  )

  if (itemsFiltrados.length === 0) {
    return (
      <p className="rounded-xl bg-surface p-8 text-center text-muted">
        No encontramos nada para &quot;{busqueda}&quot;
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {itemsFiltrados.map((item) => (
        <MovieCard
          key={item.id}
          item={item}
          estaEnLista={lista.some((itemEnLista) => itemEnLista.id === item.id)}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  )
}

export default MovieList
