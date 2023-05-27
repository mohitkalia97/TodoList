import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar"
import Todos from "./components/Todos";
import FetchHelper from "./FetchHelper";
import "/src/App.css";

function App() {

const [todoValue, setTodoValue] = useState("");
const [openTodos, setOpenTodos] = useState([]);
const [closedTodos, setClosedTodos] = useState([]);

useEffect(() => {
  fetchTodos();
}, []); 

const fetchTodos = () => {

  FetchHelper({ url: "http://localhost:8080/todo/find-all-open-todos", method: "GET" })
    .then((data) => {
      setOpenTodos(data);
    })
    .catch((error) => {
      console.error("Failed to fetch open todos:", error);
    });

  FetchHelper({ url: "http://localhost:8080/todo/find-all-closed-todos", method: "GET" })
    .then((data) => {
      setClosedTodos(data);
    })
    .catch((error) => {
      console.error("Failed to fetch closed todos:", error);
    });
}

const handleTodoChange = (value) => {
  setTodoValue(value);
  fetchTodos(); // REFETCH AFTER ADDIND TODO
}

const handleTodoDelete = (id) =>{
  FetchHelper({value: id, url: `http://localhost:8080/todo/delete-todo/${id}` , method: "DELETE"})
    .then(() => {
      fetchTodos();
    })
    .catch((error) => {
      console.error("Failed to delete todo:", error);
    });
}

const changeTodoStatus = (id) => {
  FetchHelper({value:id, url: `http://localhost:8080/todo/change-status/${id}`, method: "PUT" })
    .then(() => {
      fetchTodos();
    })
}

  return (
    <>
        <Navbar />
        <Logo/>
        <AddTodo onChange={fetchTodos} onAdd={handleTodoChange} />
        <Todos openTodos={openTodos} closedTodos={closedTodos} 
        handleTodoDelete={handleTodoDelete} changeTodoStatus={changeTodoStatus} />
    </>
  )
}

export default App
