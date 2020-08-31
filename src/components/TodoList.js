import React from 'react'

function TodoList({todos, deleteTodo, completeTodo}) {
    const addClass = (e) => {
        if(e.target.className === "completed-btn") {
            e.target.parentElement.classList.toggle("completed")
        }
    }

    let todoList = (todos.length) ? (
        todos.map(todo => {
            return(
                <div className="todo" key={todo.id} onClick={addClass}>
                    <li className="todo-item">{todo.content}</li>
                    <button className = "completed-btn" onClick={(e) => {completeTodo(todo.id)}}>
                        <i className='fas fa-check'></i>
                    </button>
                    <button className="trash-btn" onClick={() => {deleteTodo(todo.id)}}>
                        <i className='fas fa-trash'></i>
                    </button>
                </div>
            )
        })
    ) : (
        <p>You have no todo's yet</p>
    );
    
    

    return(
        
        <div className="todo-container">
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    )
}

export default TodoList