import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/UseMovies'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No puedes buscar una película sin nombre')
      return
    }

    if (search.length < 3) {
      setError('Tienes que escribir al menos tres caracteres')
      return
    }

    setError(null)
  }, [search])

  return{ search, error, updateSearch }
}

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars, Chicken Little'/>
          <div className='sort-checkbox'>
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <caption>Ordenar A-Z</caption>
          </div>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={ movies } />
        }
      </main>

    </div>
  )
}

export default App
