import { useState } from "react"
import Listgroup from "./component/Listgroup"
import Navbar from "./component/Navbar"
import Form from "./Form"
import { flushSync } from "react-dom"


const App = () => {
    const [todos ,setTodos]=useState([
      {
        id:1,
        text:"Wake-up"
      },
      {
        id:2,
        text:"Code"
      },
      {
        id:3,
        text:"Eat"
      },
      {
        id:4,
        text:"Sleep"
      },
      {
        id:5,
        text:"Repeat"
      }
  ]
)
const [edit,setEdit]=useState({
  todos:{},
  isEdit:false
})
   
    const [theme,settheme]=useState(false)
    const changetheme=()=>{
        if(theme){
            settheme(false)
        }
        else{
            settheme(true)
        }
    }
    const removeTodos=(id)=>{
     setTodos(todos.filter(item=>item.id!==id))
    }
    //Add todo
    const addTodo=(todo)=>{
      setTodos([todo,...todos])
      // console.log(todo)
    }
    //Edit todo
    const editTodo=(oldtodos)=>{
    setEdit({todos:oldtodos,isEdit:true})
    // console.log(edit)
    }
    //update todo
    const updateTodo=(updatedTodo)=>{
      setTodos(todos.map(todos=>{
        if(todos.id===updatedTodo.id){
          return updatedTodo
        }
        else{
           return todos
        }
      }))
      setEdit({
        todos:{},isEdit:false
      })
    }
  return (
    <>
        <Navbar changetheme={changetheme}/>
        <div className={theme ? "dark-container" :"container" }>
        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo}/>
        <Listgroup todos={todos} removeTodos={removeTodos} editTodo={editTodo}/>
        </div>
        

    </> )
}

export default App