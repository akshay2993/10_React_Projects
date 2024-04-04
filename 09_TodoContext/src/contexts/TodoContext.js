import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            message: "this is the message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}