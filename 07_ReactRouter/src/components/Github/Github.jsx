import { useState } from "react"

function Github() {
    const [data, setData] = useState({})
    fetch('https://github.com/akshay2993')
    .then(res => res.json())
    .then(data => setData(data))

    console.log(data)
  return (
    <div className="bg-gray-500 text-3xl text-black">
      Github Followers
    </div>
  )
}

export default Github
