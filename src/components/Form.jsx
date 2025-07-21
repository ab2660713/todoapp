import React, { useState } from 'react'

const Form = ({ addTodo,edit,updateTodo }) => {

    const [text, setText] = useState("")

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
        <form onSubmit={(e) => handleSubmit(e)} className="card">
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Enter Text" />
            <button className="save-btn">Save</button>
        </form>
    )
}

export default Form
