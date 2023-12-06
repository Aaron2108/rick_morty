import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const Residents = ({resident}) => {


    const [infoApi, getApi, hasError] =  useFetch(resident)
    useEffect(() => {
        getApi()
    }, [])
    console.log(infoApi);
  return (

    <article className="article_cards">
    <header>
    <img className="img_cards" src={infoApi?.image} alt="" />
    <div className="div_status">
        <span className={`status ${infoApi?.status.toLowerCase()}`}></span>
        <span>{infoApi?.status}</span>
    </div>
    <section>
        <h3>{infoApi?.name}</h3>
        <hr />
        <ul>
            <li>
                <span>Specie: </span>
                <span>{infoApi?.species}</span>
            </li>
            <li>
                <span>Origin: </span>
                <span>{infoApi?.origin.name}</span>
            </li>
            <li>
                <span>Episodes where appear: </span>
                <span>{infoApi?.episode.length}</span>
            </li>
        </ul>
    </section>
    </header>
    </article>
    
  )
}
export default Residents