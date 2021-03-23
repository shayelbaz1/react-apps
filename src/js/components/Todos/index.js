import React from 'react'
import Todo from '../Todo'

export default function Todos({ todos,handleToggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo handleToggleTodo={handleToggleTodo} key={todo.id} todo={todo} />
        })
    )
}
