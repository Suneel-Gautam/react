import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "tittle",
            isCompleted: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: ((id, todo) => { }),
    deleteTodo: ((id) => { }),
    toggleTodo: ((id) => { })
})

export const TodoProvider = TodoContext.Provider

export const useMemo = () => {
    return useContext(TodoContext)
}