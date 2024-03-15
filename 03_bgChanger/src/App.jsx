import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState("bg-slate-900")

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-evenly p-10 ${bgColor}`}>
      <h1 className='text-center'>Change the Background color from buttons below</h1>
      <div className='bg-slate-500 w-full max-w-xl mx-auto mt-30 p-2 flex align-middle justify-evenly rounded-full'>
        <button onClick={() => setBgColor("bg-green-600")} className='rounded-full bg-green-600'>Green</button>
        <button onClick={() => setBgColor("bg-pink-600")} className='rounded-full bg-pink-600'>Pink</button>
        <button onClick={() => setBgColor("bg-red-600")} className='rounded-full bg-red-600'>Red</button>
        <button onClick={() => setBgColor("bg-neutral-900")} className='rounded-full bg-neutral-900'>Black</button>
        <button onClick={() => setBgColor("bg-violet-800")} className='rounded-full bg-violet-800'>Violet</button>
      </div>
    </div>
  )
}

export default App
