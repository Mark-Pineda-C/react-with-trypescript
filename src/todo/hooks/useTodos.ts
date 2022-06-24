import { useContext } from 'react';
import { TodoContex } from '../context/TodoContext';

export const useTodos = () => {
    const { todoState, toggleTodo} = useContext( TodoContex );
    const {todos} = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter( todo => !todo.completed).length,
        toggleTodo
    }

}