import { useRef } from "react"
import FetchHelper from "../FetchHelper";
import PropTypes from "prop-types";

export default function AddTodo({ onAdd }) { // onAdd function as a prop

  const addButton = useRef(null);

  const handleAdd = () => {
    const value = addButton.current.value;
    FetchHelper({ value, url:"http://localhost:8080/todo/add-todo", method:"POST" })
      .then(() => onAdd()) // After the request is successful, call onAdd to refetch the todos
  }

  return (
    <>
        <input ref={addButton} type={"text"}></input>
        <button onClick={handleAdd}>Add</button>
    </>
  )
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired, // expecting a function as a prop
};
