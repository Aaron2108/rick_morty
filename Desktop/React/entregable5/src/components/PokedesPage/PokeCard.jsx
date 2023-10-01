import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url }) => {

const [ pokemon,  getPokemon ] =  useFetch(url)

   const navigate = useNavigate()

    useEffect(() => {
        getPokemon()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }



  return (
    <article className="card" onClick={handleNavigate}>
        <header className="headerCard">
            <img className="imgCard" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="contend">
            <h3 className="name2">{pokemon?.name}</h3>
            <ul className="lista">
                {
                    pokemon?.types.map(typeInfo => (
                        <li key={typeInfo.type.url}>{typeInfo.type.name}</li> 
                    ))
                }
            </ul>
            <hr className="hr1"/>
            <ul className="lista2">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="lista3" key={statInfo.stat.url}>
                            <span className="spn1">{statInfo.stat.name}</span>
                            <span className="spn2">{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}
export default PokeCard