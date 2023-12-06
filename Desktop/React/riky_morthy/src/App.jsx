import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';

function App() {

  const [inputValue, setInputValue] = useState(1)

  const validar =(numero)=>{
    if(numero === '' || numero === '0'){
    return  setInputValue('undefined');
    }else{
      return numero
    }
  }
  const valid = validar(inputValue)

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;

  const [infoApi, getApi, hasError] =  useFetch(url)

  useEffect(() => {
    getApi()
  }, [inputValue])
  
  const inputSearch = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }
  console.log(infoApi?.residents);

  return (
    <div>
      <header>
      <section>
        <img className='ricki1' src="/img/ricki1.png" alt=""/>
        <img className='ricki2'  src="/img/ricki2.png" alt=""/>
      </section>
      <section className='formulario'>
      <form onSubmit={handleSubmit}>
        <label>
          <input className='input_formulario' ref={inputSearch} type="text" placeholder='Write the location'/>
        </label>
        <button className='button_formulario'>Search</button>
      </form>
      </section>
      </header>
      {
        hasError ?
        <h2>❌ Hey! you nust provide an id from 1 to 126 😒</h2>
        :
        <>
        
        <LocationInfo
      infoApi={infoApi}
      />
      <div className='cards_residentes'>
        <ResidentCard
        key={url}
        url={url}
        residents={infoApi?.residents}/>
        {/* {
          infoApi?.residents.map(url =>(
            <ResidentCard
              key={url}
              url={url}
              residents={infoApi?.residents}
            />
          ))
        } */}
      </div>
      </>
      }
    </div>
  )
}

export default App
