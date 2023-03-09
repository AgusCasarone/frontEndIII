import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Inscription } from './components/inscription'

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
          
          <Inscription
            
          />
          <footer/>
        </div>
      </div>
      </>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
