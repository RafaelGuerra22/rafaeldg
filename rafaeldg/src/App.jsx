import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rafael Guerra</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clica aqui!!!!!!!! {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Bem vindo ao meu site de teste :P
      </p>
      <h4>Usando vite e react</h4>
    </>
  )
}

export default App
