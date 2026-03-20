import React from 'react'

const MovieCard = ({movies, setMovies, peliculasAlmacenadas}) => {

return (
  <>
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {peliculasAlmacenadas.map((movie) => (
        
         <div key={movie.id} className="bg-slate-800 rounded-xl p-4 flex flex-col items-center">
            <img src={movie.image} className="rounded-lg w-full h-[320px] object-cover"/>

            <div className="text-center mt-4">
              <h3 className="text-white font-semibold">{movie.title}</h3>
              <p className="text-gray-400 text-sm">{movie.year}</p>
              <p className="text-gray-400 text-sm">{movie.description}</p>
              <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition"
                      onClick={() => {
                        setMovies(prev => {
                          const exists = prev.find(m => m.id == movie.id)
                          if (exists) return prev
                          return [...prev, movie]
                        })
                      }}>
                  Añadir
              </button>
                        </div>

          </div>
        ))}

      </div>
    </div>
  </>
)
}

export default MovieCard
