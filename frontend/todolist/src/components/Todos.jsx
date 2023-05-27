import PropTypes from "prop-types";

export default function Todos({ openTodos, closedTodos, 
    handleTodoDelete, changeTodoStatus }) {

  return (
    <>  
      <div className="todoscontainer">
          <div className="todos">
              Open Todos: 
              <ul>
              {openTodos && openTodos.map((todo) => (
                <li className="opentodo" key={todo.id}>
                  {todo.text} 
                  <button onClick={()=>changeTodoStatus(todo.id)}>Close</button>
                  <button onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="todos">
              Closed Todos:
              <ul>
                  {closedTodos && closedTodos.map((todo) => (
                      <li className="opentodo" key={todo.id}>
                      {todo.text}
                      <button onClick={()=>changeTodoStatus(todo.id)}>Open</button>
                      <button onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                  </li>
                  ))}
                  
              </ul>
          </div>
      </div>
    </>
  )
}

Todos.propTypes = {
    openTodos: PropTypes.array.isRequired,
    closedTodos: PropTypes.array.isRequired,
    handleTodoDelete: PropTypes.func.isRequired,
    changeTodoStatus: PropTypes.func.isRequired
};


