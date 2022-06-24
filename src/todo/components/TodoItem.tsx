import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/Interfaces"
// import { useContext } from 'react';
// import { TodoContex } from '../context/TodoContext';

interface Props {
    todo: Todo
}

export const TodoItem = ({ todo }: Props) => {

    // const {toggleTodo} = useContext(TodoContex)
    const { toggleTodo } = useTodos();

    // const handleDbClick = () => {
    //     toggleTodo( todo.id );
    // }

    return (
        <li 
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onDoubleClick={ () => toggleTodo( todo.id) }
        >
            { todo.desc }
        </li>
    )
}
