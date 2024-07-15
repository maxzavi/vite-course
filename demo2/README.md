# Demo 2 - Components

In parent folder, create projecto Vite + React:

```cmd
npm create vite@latest demo2
```

Change to folder demo1 and execute:

```cmd
cd demo2
npm i
npm run dev
```

Add componentes **CardCounter** and **CardSelect** in new folder components:

```jsx
import { useState } from "react"

const CardCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
    )
}

export default CardCounter
```

And add in App:

```jsx
import './App.css'
import CardCounter from './components/CardCounter'
import CardSelect from './components/CardSelect'

const App= () =>{
  return (
    <>
      <h1>Demo 2 - Components</h1>
      <CardCounter></CardCounter>
      <CardSelect></CardSelect>
    </>
  )
}

export default App

```
