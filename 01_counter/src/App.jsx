import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>A simple Counter: {count}</h1>
      <div className='button-container'>
        <button onClick={() => setCount(count+1)}>Add</button>{' '}
        <button onClick={() => setCount(count-1)}>Subtract</button>
      </div>
    </>
  )
}

export default App
