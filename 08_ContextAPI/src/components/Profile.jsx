import { useContext } from 'react'
import UserContext from './context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if (!user) return <h1 className='text-3xl text-white text-bold mt-5'>Not Logged in!</h1>

    return (
        <h1 className='text-3xl text-white text-bold mt-5'>
            Profile: {user.userName}
        </h1>
    )
}

export default Profile
