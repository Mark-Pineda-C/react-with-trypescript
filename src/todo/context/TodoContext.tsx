import { createContext } from "react";
import { TodoState } from '../interfaces/Interfaces';

export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: ( id: string ) => void
}

export const TodoContex = createContext<TodoContextProps>({} as TodoContextProps);