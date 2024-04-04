import { useState } from 'react'
import { useTodoContext } from '../contexts'

const TodoItem = ({todo}) => {
  const [isEditable, setIsEditable] = useState(false)
  const [todoMessage, setTodoMessage] = useState(todo.message)

  const {updateTodo, deleteTodo, toggleCompleted} = useTodoContext()
  
  const editTodo = () => {
    updateTodo(todo.id, {...todo, message: todoMessage})
    setIsEditable(false)
  }

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input 
      className='cursor-pointer'
      type='checkbox'
      checked={todo.completed}
      onChange={() => toggleCompleted(todo.id)} />
      <input 
      className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"}`}
      type='text'
      value={todoMessage}
      onChange={(e) => setTodoMessage(e.target.value)} 
      readOnly= {!isEditable}/> 
      <button 
      className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
      onClick={() => {
        if(todo.completed) return
        if(isEditable){
          editTodo
          setIsEditable(false)
        }else setIsEditable((prev) => !prev)
      }}
      disabled={todo.completed}
      >{isEditable ? "📁": "✏️"}</button>
      <button
      className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
      onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoItem
