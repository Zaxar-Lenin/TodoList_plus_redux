import React from 'react';
import {TaskType} from './Components/Tasks/Tasks';
import TodoList from "./Components/TodoList";
import {TodoListType} from "./redux/reducer-todolist";
import {InputSuper} from "./Components/InputSuper/InputSuper";
import {v1} from "uuid";

type AppPropsType = {
    addTask: (title: string, ID: string) => void,
    removeTask: (idTask: string, ID: string) => void,
    updeteCheckedInputFalse: (IdTask: string, ID: string) => void,
    updeteCheckedInputTrue: (IdTask: string, ID: string) => void,
    onClickButtonFilter: (value: FilterValueType, ID: string) => void,
    addTodoList: (title: string, ID: string) => void,
    add: (ID: string) => void,
    removeTodoList: (ID: string) => void

    tasks: {
        [key: string]: TaskType[]
    }
    todoLists: TodoListType[]
}

export type FilterValueType = "all" | "comlited" | "active"


const App: React.FC<AppPropsType> = ({
                                         tasks,
                                         addTask,
                                         removeTask,
                                         updeteCheckedInputFalse,
                                         updeteCheckedInputTrue,
                                         onClickButtonFilter,
                                         todoLists,
                                         add,
                                         removeTodoList,
                                         addTodoList
                                     }) => {

    let todoList = todoLists && todoLists.map(m => {
            let startTasks = tasks[m.id]
            if (m.filter === "comlited") {
                startTasks = tasks[m.id].filter(f => f.isDone)
            } else if (m.filter === "active") {
                startTasks = tasks[m.id].filter(f => !f.isDone)
            }
            return (
                <TodoList removeTodoList={removeTodoList} updeteCheckedInputTrue={updeteCheckedInputTrue} addTask={addTask}
                          removeTask={removeTask}
                          updeteCheckedInputFalse={updeteCheckedInputFalse}
                          onClickButtonFilter={onClickButtonFilter} key={m.id} tasks={startTasks} title={m.title}
                          ID={m.id} filter={m.filter}/>)
        }
    )

    const addItemTodo = (title: string) => {
        const IDTodoList = v1()
        addTodoList(title, IDTodoList)
        add(IDTodoList)
    }

    return (
        <div className="App">
            <InputSuper callBack={addItemTodo}/>
            <div className="box">{todoList}</div>
        </div>
    )
}

export default App;
