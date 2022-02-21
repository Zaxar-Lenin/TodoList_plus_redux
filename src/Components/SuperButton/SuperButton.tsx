import React from "react";
import {FilterValueType} from "../../App";



type SuperButtonPropsType = {
    title: FilterValueType
    callBack: (value: FilterValueType,ID: string) => void
    ID: string
}

export const SuperButton = (props: SuperButtonPropsType) => {
    const onClickButton = () => {
        props.callBack(props.title,props.ID)
    }
   return <div>
       <button onClick={onClickButton}>{props.title}</button>
   </div>
}