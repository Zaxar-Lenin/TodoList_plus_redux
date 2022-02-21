import React, {ChangeEvent, useState} from "react"



type SuperSpanPropsType = {
    title: string
}

export const SuperSpan = (props:SuperSpanPropsType) => {
    let [edit,setEdit] = useState(false)
    let [value,setValue] =useState(props.title)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div >
            {edit ? <input autoFocus onBlur={() => setEdit(false)} onChange={onChangeValue} type="text" value={value}/>
                : <h3 onDoubleClick={() => setEdit(true)}>{value}</h3>}
        </div>
    )
}