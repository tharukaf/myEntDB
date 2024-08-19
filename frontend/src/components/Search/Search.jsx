import { useState, useEffect, useRef } from 'react'
import SearchDropDown from './SearchDropDown'
import fetchSearchResults from '../../utils/FetchData'
import SearchToggleGroup from './SearchToggleGroup'
import { normalize } from '../../utils/NormalizeData'

export default function Search() {
  const [searchText, setSearchText] = useState('')
  const [searchType, setSearchType] = useState('movies')
  const [movies, setMovies] = useState([])
  const [tv, setTV] = useState([])
  const [music, setMusic] = useState([])
  const [games, setGames] = useState([])
  const [books, setBooks] = useState([])
  const storage = useRef(window.localStorage)

  const handleChange = (event, newAlignment) => {
    setSearchType(newAlignment)
  }
  const funcPointers = {
    setMovies,
    setTV,
    setMusic,
    setGames,
    setBooks,
  }

  useEffect(() => {
    movies.map(movie =>
      storage.current.setItem(movie.id, JSON.stringify(movie))
    )
  }, [searchType, searchText])
  console.log(JSON.parse(storage.current.getItem(movies[1]?.id)))

  // Fetch data from the server
  useEffect(() => {
    fetchSearchResults(searchType, searchText, funcPointers)
  }, [searchText])

  const argsArr = [searchType, setSearchText, searchText]

  return (
    <>
      <div className="searchUIContainer">
        <SearchToggleGroup
          searchType={searchType}
          handleChange={handleChange}
        />
        {searchType == 'movies' && MapData(movies, ...argsArr)}
        {searchType == 'tv' && MapData(tv, ...argsArr)}
        {searchType == 'music' && MapData(music, ...argsArr)}
        {searchType == 'games' && MapData(games, ...argsArr)}
        {searchType == 'books' && MapData(books, ...argsArr)}
      </div>
    </>
  )
}

function MapData(mediaArray, searchType, setSearchText, searchText) {
  const data = mediaArray.map(normalize[searchType])
  return (
    <SearchDropDown
      optionList={data}
      searchType={searchType}
      setSearchText={setSearchText}
      searchText={searchText}
    />
  )
}
