import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./InputSuper.module.css"


type InputSuper = {
    callBack: (newTitle: string) => void
}

export const InputSuper = (props: InputSuper) => {

    let [value, setValue] = useState("")
    let [error, setError] = useState(false)


    const readText = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        setValue(text)
        setError(false)
    }

    const addItem = () => {
        value = value.trim()
        if (value == "") {
            setError(true)
        } else {
            props.callBack(value)
            setValue("")

        }
    }

    const onKeyPressAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            value = value.trim()
            if (value == "") {
                setError(true)
            } else {
                props.callBack(value)
                setValue("")

            }
        }
    }

    return (
        <div>
            <input onKeyPress={onKeyPressAdd} className={error ? s.error : ""} onChange={readText} type="text"
                   value={value}/>
            <button onClick={addItem}>+</button>
        </div>
    )
}