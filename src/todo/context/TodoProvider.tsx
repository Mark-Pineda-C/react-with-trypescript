import { TodoContex } from "./TodoContext"
import { TodoState } from '../interfaces/Interfaces';
import { useReducer } from 'react';
import { TodoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            desc: 'hacer un todo',
            completed: false
        },
        {
            id: '2',
            desc: 'insertar todos al todo',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {

    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        <TodoContex.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContex.Provider>
    )
}
