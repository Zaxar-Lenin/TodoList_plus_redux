import {v1} from "uuid"
import {TaskType} from "../Components/Tasks/Tasks"
import {FilterValueType} from "../App";

export const IDTodoListOne = v1()
export const IDTodoListTwo = v1()

const defaultState: { [key: string]: TaskType[] } = {
    [IDTodoListOne]: [
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: true, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: true, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"}
    ],
    [IDTodoListTwo]: [
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: true, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: true, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"},
        {id: v1(), isDone: false, title: "CSS"}
    ]
}


type ActionType =
    ActionTypeRemoveTaskAC
    | ActionTypeAddTaskAC
    | ActionTypeUpdeteCheckedInputFalseAC
    | ActionTypeUpdeteCheckedInputTrueAC
    | ActionTypeAddAC


export const reducerTasks = (state = defaultState, action: ActionType): { [key: string]: TaskType[] } => {
    switch (action.type) {
        case "REMOV-TASK":
            return {
                ...state,
                [action.suitcase.ID]: state[action.suitcase.ID].filter(f => f.id !== action.suitcase.id)
            }
        case "ADD-TASK":
            let newTask = {id: v1(), isDone: false, title: action.suitcase.title}
            return {
                ...state,
                [action.suitcase.ID]: [newTask, ...state[action.suitcase.ID]]
            }
        case "UPDETE-CHECKED-FALSE":
            return {
                ...state,
                [action.suitcase.ID]: state[action.suitcase.ID].map(m => m.id === action.suitcase.id
                    ? {...m, isDone: false}
                    : m)
            }
        case "UPDETE-CHECKED-TRUE":
            return {
                ...state,
                [action.suitcase.ID]: state[action.suitcase.ID].map(m => m.id === action.suitcase.id ? {
                    ...m,
                    isDone: true
                } : m)
            }
        case "ADD":
            return {
                ...state, [action.suitcase.ID]: []
            }

        default:
            return state
    }
}


export const removeTaskAC = (IdTask: string, ID: string) => {

    return {
        type: "REMOV-TASK",
        suitcase: {
            id: IdTask,
            ID: ID
        },
    } as const

}
export const updeteCheckedInputFalseAC = (IdTask: string, ID: string) => {
    return {
        type: "UPDETE-CHECKED-FALSE",
        suitcase: {
            id: IdTask,
            ID: ID
        }

    } as const
}
export const updeteCheckedInputTrueAC = (IdTask: string, ID: string) => {
    return {
        type: "UPDETE-CHECKED-TRUE",
        suitcase: {
            id: IdTask,
            ID: ID
        }

    } as const
}
export const addTaskAC = (newTitle: string, ID: string) => {
    return {
        type: "ADD-TASK",
        suitcase: {
            title: newTitle,
            ID: ID
        },
    } as const
}
export const addAC = (ID: string) => {
    return {
        type: "ADD",
        suitcase:{
            ID: ID
        }
    } as const
}


type ActionTypeRemoveTaskAC = {
    type: "REMOV-TASK",
    suitcase: {
        id: string
        ID: string
    }
}
type ActionTypeAddTaskAC = {
    type: "ADD-TASK",
    suitcase: {
        title: string
        ID: string
    }
}
type ActionTypeUpdeteCheckedInputFalseAC = {
    type: "UPDETE-CHECKED-FALSE",
    suitcase: {
        id: string
        ID: string
    }
}
type ActionTypeUpdeteCheckedInputTrueAC = {
    type: "UPDETE-CHECKED-TRUE",
    suitcase: {
        id: string
        ID: string
    }
}
type ActionTypeAddAC = {
    type: "ADD",
    suitcase:{
        ID: string
    }

}
