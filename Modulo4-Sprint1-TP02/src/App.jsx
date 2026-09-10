import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

function App() {
  const [mostrarLista, setMostrarLista] = useState(false)
  const [lista, setLista] = useState(() => {
    const guardada = localStorage.getItem('watchlist')
    return guardada ? JSON.parse(guardada) : []
  })

  const toggleItem = (item) => {
    setLista((actual) =>
      actual.some((itemActual) => itemActual.id === item.id)
        ? actual.filter((itemActual) => itemActual.id !== item.id)
        : [...actual, item],
    )
  }

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(lista))
  }, [lista])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        cantidad={lista.length}
        abrirLista={() => setMostrarLista(true)}
      />
      <Main
        lista={lista}
        toggleItem={toggleItem}
        mostrarLista={mostrarLista}
        cerrarLista={() => setMostrarLista(false)}
      />
      <Footer />
    </div>
  )
}

export default App
