import React, { useEffect, useState } from 'react'

const Form = ({addTodo,edit,updateTodo}) => {
  const [text,setText]=useState("")
  console.log(edit)
  const handleTodo=(e)=>{
e.preventDefault()
if (edit.isEdit === false) {
  // Save Feedback
  addTodo({id:crypto.randomUUID(),text:text})
} else {
  // Update Feedback
  updateTodo({ id: edit.todos.id, text})
}


setText("")
  }

  useEffect(()=>{
setText(edit.todos.text)
  },[edit])
  return (
    <form onSubmit={(e)=>handleTodo(e)}  className="card">
    <input onChange={(e)=> setText(e.target.value)} value={text} type="text" placeholder="Enter text" required></input>
    <button className="Save-btn">Save</button>

  </form>
  )
}

export default Form