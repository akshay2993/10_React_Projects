import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './components/context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
    <Login />
    <Profile />
    </div>
    </UserContextProvider>
  )
}

export default App
