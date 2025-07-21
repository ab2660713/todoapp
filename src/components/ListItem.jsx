import React from 'react'

const ListItem = ({ todo, removeTodo ,editTodo}) => {
    return (
        <li className="list-item">
            <p>ID : {todo.id}</p>
            <h1>{todo.text}</h1>
            <span>
                <button onClick={()=>editTodo(todo)} className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={() => removeTodo(todo.id)}>Delete</button>
            </span>
        </li>
    )
}

export default ListItem
