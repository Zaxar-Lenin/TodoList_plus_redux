import {connect} from "react-redux";
import App, {FilterValueType} from "./App";
import {Dispatch} from "redux";
import {
    addAC,
    addTaskAC,
    removeTaskAC,
    updeteCheckedInputFalseAC,
    updeteCheckedInputTrueAC
} from "./redux/reducer-tasks";
import {StateType} from "./redux/store-redux";
import {addTodoListAC, clickButtonFilterAC, removeTodoListAC, TodoListType} from "./redux/reducer-todolist";
import {TaskType} from "./Components/Tasks/Tasks";


type mapStateToPropsType = {
    tasks: {
        [key: string]: TaskType[]
    }
    todoLists: TodoListType[]
}
type mapDispatchToPropsType = {
    addTask: (title: string, ID: string) => void,
    removeTask: (idTask: string, ID: string) => void,
    updeteCheckedInputFalse: (IdTask: string, ID: string) => void,
    updeteCheckedInputTrue: (IdTask: string, ID: string) => void,
    onClickButtonFilter: (value: FilterValueType, ID: string) => void,
    addTodoList: (title: string, ID: string) => void,
    add: (ID: string) => void,
    removeTodoList: (ID:string) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        todoLists: state.reducerTodoLists.todoLists,
        tasks: state.reducerTasks
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addTask: (title: string, ID: string) => {
            dispatch(addTaskAC(title, ID))
        },
        removeTask: (idTask: string, ID: string) => {
            dispatch(removeTaskAC(idTask, ID))
        },
        updeteCheckedInputFalse: (IdTask: string, ID: string) => {
            dispatch(updeteCheckedInputFalseAC(IdTask, ID))
        },
        updeteCheckedInputTrue: (IdTask: string, ID: string) => {
            dispatch(updeteCheckedInputTrueAC(IdTask, ID))
        },
        onClickButtonFilter: (value: FilterValueType, ID: string) => {
            dispatch(clickButtonFilterAC(value, ID))
        },
        addTodoList: (title: string, ID: string) => {
            dispatch(addTodoListAC(title, ID))
        },

        add: (ID: string) => {
            dispatch(addAC(ID))
        },
        removeTodoList: (ID: string) => {
            dispatch(removeTodoListAC(ID))
        }

        // setTasks: () => {
        //     dispatch(setTasksAC())
        // }
    }
}

export const AppConteiner = connect<mapStateToPropsType, mapDispatchToPropsType,{},  StateType>(mapStateToProps, mapDispatchToProps)(App)