import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [
        {

        }
    ],
    addTodo: (todo) => { },
    updateTodo: ((id, todo) => { }),
    deleteTodo: ((id) => { }),
    toggleTodo: ((id) => { })
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}