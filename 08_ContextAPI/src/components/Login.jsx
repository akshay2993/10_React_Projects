import { useContext, useState } from "react"
import UserContext from "./context/UserContext"

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const {user, setUser} = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault()
    setUser({userName, password})

    console.log(userName, password)
    console.log(user)
  }

  return (
    <div className="w-screen flex items-center justify-center bg-gray-900">
      <form className="w-1/2 max-w-md py-10 px-8 outline-2 outline-white rounded-lg bg-slate-700 flex flex-col items-center">
        <h1 className="text-4xl text-bold text-slate-100 mb-5 ">Login to you account.</h1>
        <input
          className="my-3 outline-2 outline-slate-400 rounded-lg py-3 px-4 w-full"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        {''}
        <input
          type="password"
          className="my-3 outline-2 outline-slate-400 rounded-lg py-3 px-4 w-full"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" 
          />
        <button
          className="text-white bg-sky-800 rounded-xl px-5 py-4 w-full mt-5"
          type="submit"
          value={password}
          onClick={handleSubmit}
        >Submit</button>
      </form>
    </div>
  )
}

export default Login
