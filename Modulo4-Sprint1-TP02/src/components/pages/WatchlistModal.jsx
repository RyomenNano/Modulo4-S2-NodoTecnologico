
const WatchlistModal = ({ setOpen, setMovies, movies}) => {

  const removeMovie = (id) => {
    const updated = movies.filter(movie => movie.id !== id)
    setMovies(updated)
  }

  return (
    <div className="bg-slate-800 text-white rounded-xl w-[90%] max-w-5xl shadow-xl">
      <div className="flex justify-between items-center p-4 border-b border-gray-600">

        <h2 className="font-bold text-lg"> My Watchlist</h2>
        <button onClick={() => setOpen(prev => !prev)} className="text-gray-300 hover:text-white text-xl">
          ✕
        </button>
        
      </div>

      <div className="p-4 space-y-4 h-[800px] overflow-y-auto">

        {movies.length > 0 ? ( movies.map((movie) => (
            <div key={movie.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-lg border border-yellow-400">
              
              <div className="flex items-center gap-3">
                <img src={movie.image} alt={movie.title} className="w-14 h-20 object-cover rounded"/>
                <p className="font-medium">{movie.title}</p>
              </div>

              <button onClick={() => removeMovie(movie.id)} className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-400 transition">
                Remove
              </button>

            </div>))) 
            :
            ( <p className="text-center text-gray-400">
              No hay películas
              </p>)}

      </div>
    </div>
  )
}

export default WatchlistModal