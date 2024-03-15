import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, steNumberAllowed] = useState(false)
  const [charAllowed, steCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pswd = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()' 

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pswd += str.charAt(char)
    }
    setPassword(pswd)
  }, [length, numberAllowed, charAllowed])

  const copyPswd = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='bg-gray-900 flex items-center justify-center w-full h-screen'>
      <div className='bg-gray-300 w-full h-auto max-w-md px-4 py-6 rounded-lg'>
        <h1 className='text-center text-3xl font-bold text-black mb-8'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-4'>
          <input
            type='text'
            className='outline-none w-full px-2 py-1'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            value={password}
          />
          <button onClick={copyPswd} className='bg-blue-900 px-3 py-1 shrink-0 text-white cursor-pointer'>Copy</button>
        </div>
        <div className='flex justify-between text-sm'>
          <div className='flex gap-x-2'>
            <input
              type='range'
              value={length}
              min={8}
              max={32}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>

          <div className='flex gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => steNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='number'>Numbers</label>
          </div>

          <div className='flex gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              onChange={() => steCharAllowed((prev) => !prev)}
            />
            <label htmlFor='character'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
