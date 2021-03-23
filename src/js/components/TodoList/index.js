import React, { useState ,useRef,useEffect} from 'react'
import Todos from '../Todos'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodoRef = useRef(null)

    useEffect(() => {
        const oldTodos = JSON.parse(localStorage.getItem('todos'))
        if(oldTodos) setTodos(oldTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function handleAddTodo(){
        const newTitle = addTodoRef.current.value
        if(newTitle==='')return
        const newTodo = {id:uuidv4(),title: newTitle, completed:false}
        setTodos(prevTodos=>{
            return [...prevTodos,newTodo]
        })
        addTodoRef.current.value = null
    }

    function handleClearCompleted(){
        let newTodos = [...todos]
        newTodos = newTodos.filter(todo=>!todo.completed)
        setTodos(newTodos)
    }

    function handleToggleTodo(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo=>todo.id === id)
        todo.completed=!todo.completed
        setTodos(newTodos)
    }


    return (
        <div>
            <Todos todos={todos} handleToggleTodo={handleToggleTodo}/>
            <input ref={addTodoRef} type="text"></input>
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClearCompleted}>Clear completed</button>
            <p>{todos.filter(todo=>!todo.completed).length} left todos</p>
        </div>
    )
}
