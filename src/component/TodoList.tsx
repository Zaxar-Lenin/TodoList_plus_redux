import React from 'react';
import { Button } from './Button';
import { Header } from './Header';
import { Task } from './Task';
import { TypeFilteer } from './../App';

export type TypeTaskAr = {
    id: number
    isDone: boolean
    title: string
}

type TypeTodoList = {  
    title: string
    task: Array<TypeTaskAr>
    removeTask: (id: number) => void
    filedFuc: (filteer: TypeFilteer) => void

}

export const Todolist = (props: TypeTodoList) => {
    // const components = props.task.map(t => {
    //     return(
    //         <Task 
    //             id = {t.id}
    //             // removeTask = {t.removeTask}
    //             isDone = {t.isDone}
    //             title = {t.title}
    //         />
    //     )
    // })
    return(
        <div className='todo'>
            <Header title = {props.title}/>
            <ul>
                {/* {components} */}
                {props.task.map(t => <Task removeTask = {props.removeTask} key={t.id} id = {t.id} isDone = {t.isDone} title = {t.title} />)}
                
            </ul>
            <div className='bt'>
                    <Button 
                        name = 'all'
                        onHendler = {() => props.filedFuc("all")}
                    />
                    <Button 
                        name = 'completed'
                        onHendler = {() => props.filedFuc("completed")}
                        />
                    <Button 
                        name = 'active'
                        onHendler = {() => props.filedFuc("active")}
                        />
            </div>
        </div>
    )
}