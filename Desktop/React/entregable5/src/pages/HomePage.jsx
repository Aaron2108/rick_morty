import { useRef } from "react"
import { setTrainerSlice } from "../slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {


const inputTrainer =  useRef()

const dispatch= useDispatch()

const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="pokedex">
        <div className="pokedex-img"><img className="pokeimg" src="./img/pokedex.png" alt="" /></div>
        <h2 className="saludo">Hi Trainer!</h2>
        <p className="parrafo">To start, please give me yout trainer name</p>
        <form onSubmit={handleTrainer}>
            <input placeholder="Name" ref={inputTrainer} type="text" />
            <button className="start">Start!</button>
        </form>
    </div>
  )
}
export default HomePage