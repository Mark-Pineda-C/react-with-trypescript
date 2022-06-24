// import { useContext } from "react"
// import { TodoContex } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
    
    // const { todoState } = useContext(TodoContex)
    // const { todos } = todoState;

    const { todos } = useTodos();

    return (
        <ul>
            { todos.map( todo => <TodoItem key={ todo.id } todo={ todo }/>)}
        </ul>
  )
}
