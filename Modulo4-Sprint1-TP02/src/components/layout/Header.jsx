import React from 'react'

const Header = ({ setOpen }) => {
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-slate-900 text-white shadow-md">
      
      <h1 className="text-5xl font-bold">Movies</h1>

      <button
        onClick={() => setOpen(prev => !prev)}
        className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition"
      >
        Watchlist
      </button>

    </header>
    </>
  )
}

export default Header
