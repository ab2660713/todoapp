import React from 'react'

const Listitem = ({todo,removeTodos ,editTodo}) => {
  return (
    <li className="list-item">
     <p>ID : {todo.id}</p>
        <h1>{todo.text}</h1>
        <span>
          <button  onClick={()=>editTodo(todo)} className="edit-btn">Edit</button>
          <button  onClick={()=>removeTodos(todo.id)} className="delete-btn">Delete</button>
        </span>
      </li>
  )
}

export default Listitem