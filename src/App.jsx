import { useState } from "react"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import Navbar from "./components/Navbar"

function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Wake-Up"
        },

    ])

    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        if (theme) {
            setTheme(false)
        } else {
            setTheme(true)
        }
    }



    // Remove Todo
    const removeTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }


    // Add Todo
    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }
    //edit todo
    const [edit,setEdit]=useState({
        todos:{},
        isEdit:false
      })
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
            <Navbar changeTheme={changeTheme} />
            <div className={theme ? "dark-container" : "container"}>
                <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo}/>
                <ListGroup todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>
            </div>
        </>
    )
}

export default App