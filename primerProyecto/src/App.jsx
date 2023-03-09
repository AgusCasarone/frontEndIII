import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Inscription } from './components/inscription'
import { Ending } from './components/ending'
import { Input } from './components/input'
import { Card } from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>¡Clases de música!</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>¿Te gustaría tocar un instrumento?</h2>
            <p>¡Esta es tu oportunidad!</p>
            <br />
            <p>♫☻♥ Completá el formulario para inscribirte a las clases del instrumento que siempre quisiste tocar ♥☻♫</p>
          </div>
          
          <Inscription/>
          <Ending/>
        </div>
      </div>
      </>
  )
}

export default App
