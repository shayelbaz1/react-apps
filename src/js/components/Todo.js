import React from 'react'

export default function Todo({ todo,handleToggleTodo }) {
    console.log('todo:', todo)

    function handleOnChange(){
        handleToggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handleOnChange}></input>
                {todo.title}
            </label>
        </div>
    )
}
