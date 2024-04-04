import React from 'react'
import { useState } from 'react'
import { useTodoContext } from '../contexts'

const TodoForm = () => {
    const [todoMessage, setTodoMessage] = useState("")
    const {addTodo} = useTodoContext()

    const add = (e) => {
        e.preventDefault()
        if(!todoMessage) return
        addTodo({message: todoMessage, completed: false})
        setTodoMessage("")
    }

  return (
    <form onSubmit={add} className='flex'>
      <input 
      type='text'
      className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
      value={todoMessage}
      placeholder='What to do?'
      onChange={(e) => setTodoMessage(e.target.value)} 
      />
      <button
      className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
      type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm
