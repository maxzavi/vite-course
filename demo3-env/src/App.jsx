import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Demo 3 - Environment Variables</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        <h1>API Path: {import.meta.env.VITE_PATH_API}</h1>
      </p>
    </>
  )
}

export default App
