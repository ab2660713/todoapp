import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({todos,removeTodos,editTodo}) => {
  return (
    <ul className="card">
     {
        todos.map((todo)=>{
            return(
                <Listitem key={todo.id} todo={todo} removeTodos={removeTodos} editTodo={editTodo}/>
            )
          
        })
     }

      </ul>
  )
}

export default Listgroup