import { useState } from 'react'
import './App.css'
import usePrev from "./hooks/usePrev.js";

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  const prev = usePrev(count);
  console.log(prev.current)

  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>

        {prev.current !== null && (
            <h2>Previous value is {prev.current}</h2>
        )}
    </>
  )
}

export default App
