import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ todos, removeTodo,editTodo }) => {
    return (
        <ul className="card">
            {
                todos.map((todo) => {
                    return (
                        <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
                    )
                })
            }
        </ul>
    )
}

export default ListGroup
