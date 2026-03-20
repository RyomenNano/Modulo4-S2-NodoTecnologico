import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

function App() {

  const [open, setOpen] = useState(false)

  const [movies, setMovies] = useState([])

  const [loaded, setLoaded] = useState(false)

useEffect(() => {
  const stored = localStorage.getItem("watchlist")
  if (stored) {
    setMovies(JSON.parse(stored))
  }
  setLoaded(true)
}, [])

useEffect(() => {
  if (loaded) {
    localStorage.setItem("watchlist", JSON.stringify(movies))
  }
}, [movies, loaded])

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header setOpen={setOpen} />
        <Main setOpen={setOpen} open={open} movies={movies} setMovies={setMovies} />
        <Footer />
      </div>
    </>
  )
}

export default App
