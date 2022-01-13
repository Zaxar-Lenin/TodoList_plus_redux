import React, { useState } from 'react';
import './App.css';
import { Task } from './component/Task';
import { Todolist } from './component/TodoList';
import { TypeTaskAr } from './component/TodoList';


export type TypeFilteer = "all" | "active" | "completed"

function App() {

  // let task1: Array<TypeTaskAr> = [
  //   { id: 1, isDone: true, title: "milk"},
  //   { id: 2, isDone: true, title: "beer"},
  //   { id: 3, isDone: true, title: "pool"},
  //   { id: 4, isDone: true, title: "beer"},
  //   { id: 5, isDone: true, title: "pool"}
  // ]

  let [tasks, setTasks] = useState <Array<TypeTaskAr>> (
    [
      { id: 1, isDone: true, title: "milk"},
      { id: 2, isDone: true, title: "beer"},
      { id: 3, isDone: false, title: "pool"},
      { id: 4, isDone: true, title: "beer"},
      { id: 5, isDone: false, title: "pool"}
    ]
  )
  let [filteer, setFilteer] = useState<TypeFilteer>("all")

const train = () => {
        switch(filteer){
          case "completed":
            return tasks.filter(t => t.isDone)
          case "active":
            return tasks.filter(t => !t.isDone)
          default:
            return tasks
        }
  }
  const filedFuc = (filteer: TypeFilteer) => {
      setFilteer(filteer)
  }

  // const task2: Array<TypeTaskAr> = [
  //   { id: 4, isDone: true, title: "milk"},
  //   { id: 5, isDone: true, title: "beer"},
  //   { id: 6, isDone: true, title: "pool"}
  // ]
 const removeTask = (id: number) => {
      const fifledBi = tasks.filter(t => id !== t.id)
      setTasks(fifledBi)
  }

 
  return (
    <div className="App">
        <Todolist 
            title='Zaxar'
            task = {train()}
            removeTask = {removeTask}
            filedFuc = {filedFuc}
            />
        {/* <Todolist title='Maksim' task = {task2}/> */}
    </div>
  );
}

export default App;
