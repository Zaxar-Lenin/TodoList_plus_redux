import React from 'react';
import {InputSuper} from './InputSuper/InputSuper';
import {Tasks, TaskType} from './Tasks/Tasks';
import {SuperButton} from "./SuperButton/SuperButton";
import s from "./TodoList.module.css"
import {SuperSpan} from "./SuperSpan/SuperSpan";

type TodoList = {
    title: string
    ID: string
    filter: FilterValueType
    tasks: TaskType[]
    addTask: (title: string, ID: string) => void
    removeTask: (idTask: string, ID: string) => void
    updeteCheckedInputFalse: (IdTask: string, ID: string) => void
    updeteCheckedInputTrue: (IdTask: string, ID: string) => void
    onClickButtonFilter: (value: FilterValueType, ID: string) => void
    removeTodoList: (ID: string) => void
}

export type FilterValueType = "all" | "comlited" | "active"


const TodoList = (props: TodoList) => {

    const addItemTask = (title: string) => {
        props.addTask(title, props.ID)
    }
    const removeTodoListOnClick = () => {
        props.removeTodoList( props.ID)
    }


    return (
        <div className={s.todo}>
            <SuperSpan title = {props.title}/>
            <button onClick={removeTodoListOnClick}>x</button>
            <InputSuper callBack={addItemTask}/>
            <Tasks ID={props.ID} updeteCheckedInputFalse={props.updeteCheckedInputFalse}
                   updeteCheckedInputTrue={props.updeteCheckedInputTrue} removeTask={props.removeTask}
                   tasks={props.tasks}/>
            <SuperButton ID={props.ID} title={"all"} callBack={props.onClickButtonFilter}/>
            <SuperButton ID={props.ID} title={"comlited"} callBack={props.onClickButtonFilter}/>
            <SuperButton ID={props.ID} title={"active"} callBack={props.onClickButtonFilter}/>
        </div>
    )
}

export default TodoList;
