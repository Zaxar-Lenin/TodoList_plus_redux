import React from "react";
import {TaskItem} from "./TaskItem/TaskItem";


export type TaskType = {
    id: string
    isDone: boolean
    title: string
}

type TasksPropsType = {
    tasks: TaskType[]
    ID: string
    removeTask: (Idtask: string, ID: string) => void
    updeteCheckedInputFalse: (IdTask: string, ID: string) => void
    updeteCheckedInputTrue: (IdTask: string, ID: string) => void
}



export const Tasks = (props: TasksPropsType) => {

    console.log(props.tasks)




    return (
        <>
            <div>

                {props.tasks.map(m => <TaskItem ID={props.ID} removeTask={props.removeTask} updeteCheckedInputFalse={props.updeteCheckedInputFalse} updeteCheckedInputTrue={props.updeteCheckedInputTrue}  id={m.id} key = {m.id} title={m.title} isDone={m.isDone}/>)}
            </div>
        </>
    )
}