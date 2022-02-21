import React, {ChangeEvent} from "react"
import {TaskType} from "../Tasks";
import {SuperSpan} from "../../SuperSpan/SuperSpan";
import s from "./TaskItem.module.css"


type TaskItemPropsType = TaskType & {
    ID: string
    updeteCheckedInputFalse: (IdTask: string, ID: string) => void
    updeteCheckedInputTrue: (IdTask: string, ID: string) => void
    removeTask: (Idtask: string, ID: string) => void
}

export const TaskItem = ({
                             id,
                             ID,
                             isDone,
                             title,
                             updeteCheckedInputFalse,
                             updeteCheckedInputTrue,
                             removeTask
                         }: TaskItemPropsType) => {

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        let checked = e.currentTarget.checked
        if (checked == true) {
            updeteCheckedInputTrue(id, ID)
        } else {
            updeteCheckedInputFalse(id, ID)
        }
    }

    const onClickRemove = () => {
        removeTask(id, ID)
    }


    return (
        <div>
            <div className={s.task}>

                <input type="checkbox" onChange={onChangeChecked} checked={isDone}/>
                <SuperSpan title={title}/>
                <button onClick={onClickRemove}>x
                </button>
            </div>
        </div>
    )
}