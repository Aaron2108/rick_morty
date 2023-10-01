import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedesPage/PokeCard";
import SelectType from "../components/PokedesPage/SelectType";

const PokedexPage = () => {

  const [inputValue, setInput] = useState('')
  const [TypeSelecter, settypeSelecter] = useState('allPokemons')



  const trainer =  useSelector(store => store.trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

  useEffect(() => {
    if(TypeSelecter === 'allPokemons') {
      getPokemons()
    }else{
      getTypePokemon(TypeSelecter)
    }
  }, [TypeSelecter])

const handleSearch = e => {
  e.preventDefault()
  setInput(inputSearch.current.value.trim().toLowerCase())
}

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <p className="titulo1">Hi {trainer}</p>
      <div className="seleccion">
      <form onSubmit={handleSearch}>
        <input placeholder="Busca tu pokemon" ref={inputSearch} type="text" />
        <button className="search">Search</button>
      </form>
      <SelectType  
      settypeSelecter={settypeSelecter}/>
      </div>
      <div  className="contendCards">
        {
          pokeFiltered?.map(poke =>(
            <PokeCard
              key={poke.url}
              url= {poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}
export default PokedexPage