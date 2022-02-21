import {IDTodoListOne, IDTodoListTwo} from "./reducer-tasks";
import {FilterValueType} from "../App";
import {v1} from "uuid";


export type TodoListType = {
    id: string
    title: string
    filter: FilterValueType
}

const defaultState = {
    todoLists: [
        {id: IDTodoListOne, title: "zaxar", filter: "all"},
        {id: IDTodoListTwo, title: "gggggg", filter: "all"},
    ]as Array<TodoListType>

}
export type TodoReducerType = typeof defaultState
type ActionType = ActionTypeClickButtonFilterAC | ActionTypeAddTodoListAC | ActionTypeRemoveTodoLisAC

export const reducerTodoLists = (state = defaultState, action: ActionType):TodoReducerType  => {
    switch (action.type) {
        case "FILTER-BUTTON":
            return {
                ...state,
                todoLists: state.todoLists.map(m => m.id === action.suitcase.ID
                    ? {...m, filter: action.suitcase.filter}
                    : m)
            }
        case "ADD-TODOLIST":
            return {...state, todoLists: [{id: action.suitcase.ID, title: action.suitcase.title , filter: "active"}, ...state.todoLists]}
        case "REMOVE-TODOLIST":
            return {...state,todoLists: state.todoLists.filter(f => f.id !== action.suitcase.ID)}




        // let newTodoList = {id: action.suitcase.ID, title: action.suitcase.title , filter: "active"}
            // return {
            //     newTodoList,...state
            // }
        default:
            return state
    }
}


export const clickButtonFilterAC = (value: FilterValueType, ID: string) => {
    return {
        type: "FILTER-BUTTON",
        suitcase: {
            filter: value,
            ID: ID
        }
    } as const
}

export const addTodoListAC = (title: string, ID: string) => {
    return {
        type: "ADD-TODOLIST",
        suitcase: {
            title: title,
            ID: ID
        }
    } as const
}

export const removeTodoListAC = (ID: string) => {
    return {
        type: "REMOVE-TODOLIST",
        suitcase: {
            ID: ID
        }
    } as const
}

type ActionTypeRemoveTodoLisAC = ReturnType<typeof removeTodoListAC>


type ActionTypeClickButtonFilterAC = {
    type: "FILTER-BUTTON"
    suitcase: {
        filter: FilterValueType
        ID: string
    }

}

type ActionTypeAddTodoListAC = {
    type: "ADD-TODOLIST"
    suitcase: {
        title: string
        ID: string
    }

}