import React from 'react';
import { TypeTaskAr } from './TodoList';

type TypeTask = TypeTaskAr & {
    removeTask: (id: number) => void
}


export const Task: React.FC<TypeTask> = ({
    id,
    isDone,
    title,
    removeTask
}) => {
    return(  
            <li key={id}>
                <input type = "checkbox" checked = {isDone} />
                <span>{title}</span>
                <button onClick={() => removeTask(id)}>X</button>
            </li>
    )
}