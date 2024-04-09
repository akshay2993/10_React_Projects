import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todoSlice'
const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (<div>
    {todos.map((todo) => {
        return <div key={todo.id} className='block'>
            <p className='text-white'>{todo.text}</p>
        <button
            onClick={() => dispatch(removeTodo(todo.id))}
        >Delete</button>
            </div>
      })}
    </div>
    )
}

export default Todos
