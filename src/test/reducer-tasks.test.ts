import {IDTodoListOne, IDTodoListTwo, reducerTasks, updeteCheckedInputFalseAC} from "../redux/reducer-tasks";
import {addTodoListAC, reducerTodoLists, TodoReducerType} from "../redux/reducer-todolist";
import {v1} from "uuid";
import {TaskType} from "../Components/Tasks/Tasks";

test("checking out reducer who answer tasks",() => {
    let id = v1()
    let titleNewTodoList = "vvvvv"
    let  tasks: { [key: string]: TaskType[] } = {
        [IDTodoListOne]: [
            {id: v1(), isDone: false, title: "CSS"},
            {id: v1(), isDone: true, title: "CSS"},
            {id: v1(), isDone: false, title: "CSS"},
            {id: id, isDone: true, title: "CSS"},
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

    let nState = reducerTasks(tasks,updeteCheckedInputFalseAC(id,IDTodoListOne))
    let done = nState[IDTodoListOne][3]

    expect(done.isDone).toBe(false)


})