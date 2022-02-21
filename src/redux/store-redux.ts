import {combineReducers, createStore} from "redux";
import {reducerTodoLists} from "./reducer-todolist";
import {reducerTasks} from "./reducer-tasks";

let Reducers = combineReducers({
    reducerTasks,
    reducerTodoLists
})

export let store = createStore(Reducers)

export type StoreType = typeof store
export type StateType = ReturnType<typeof Reducers>