import {IDTodoListOne, IDTodoListTwo} from "../redux/reducer-tasks";
import {addTodoListAC, reducerTodoLists, TodoReducerType} from "../redux/reducer-todolist";
import {v1} from "uuid";

test("checking out reducer who answer todolis",() => {
    let id = v1()
    let titleNewTodoList = "vvvvv"
    let  todo: TodoReducerType = {
        todoLists: [
            {id: IDTodoListOne, title: "zaxar", filter: "all"},
            {id: IDTodoListTwo, title: "gggggg", filter: "all"},
        ]
    }

    let nState = reducerTodoLists(todo,addTodoListAC(titleNewTodoList,id))

    expect(nState.todoLists.length).toBe(3)


})