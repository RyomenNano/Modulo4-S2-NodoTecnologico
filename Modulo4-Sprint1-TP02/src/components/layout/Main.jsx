import { useState } from 'react'
import MovieList from '../MovieList'
import WatchlistModal from '../pages/WatchlistModal'

const Main = ({ lista, toggleItem, mostrarLista, cerrarLista }) => {
  const [busqueda, setBusqueda] = useState('')

  return (
    <main className="flex-1 bg-background">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <label className="mb-8 block">
          <span className="mb-2 block font-semibold text-text">Buscar películas</span>
          <input
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Buscá por nombre..."
            className="w-full rounded-xl border border-primary/40 bg-surface px-4 py-3 text-text outline-none focus:border-primary"
          />
        </label>
        <MovieList
          busqueda={busqueda}
          lista={lista}
          toggleItem={toggleItem}
        />
      </section>
      {mostrarLista && (
        <WatchlistModal
          lista={lista}
          toggleItem={toggleItem}
          cerrarLista={cerrarLista}
        />
      )}
    </main>
  )
}

export default Main
