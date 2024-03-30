import { useState } from 'react'
import BgImage from './assets/money.jpg'

function App() {

  return (
    <main className="w-screen h-screen flex items-center justify-center" style={{backgroundImage : `url(${BgImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className='w-full max-w-md h-auto outline-white rounded-lg bg-slate-300 flex flex-col'></div>
    </main>
  )
}

export default App
