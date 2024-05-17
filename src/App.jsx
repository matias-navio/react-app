import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// exprecion lamda que retorna un contador y 2 logos
export const App = () => {
  /*
      se crea una constante con un valor y un método 
      es igual a useState(0) define el estado de los componente en React
      en este caso una variable que inicia en 0
  */
  const [count, setCount] = useState(0)

  // retorna el componente jsx
  /*
      el boton responde a un click
      que cambia el estado de la varaible count
      cada click aumenta en 1 su valor
  */
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => ++count)}> 
          count is {count}
        </button>
      </div>
    </>
  )
}

