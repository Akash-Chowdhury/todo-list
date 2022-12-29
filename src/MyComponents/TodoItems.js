import React from 'react';

const Todo = ({ todo, onDelete }) => {
  let boxstyle = {
    border: "1px solid lightgrey",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
    position: "relative",
    boxShadow: "10px 2px 30px lightgrey",

  }
  let btnstyle={
    position:" absolute",
    top: "6%",
    right: "1%",
    borderRadius: "50px",

  }

  return (
    <div className='container py-3 mt-4' style={boxstyle}>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' style={btnstyle} onClick={() => { onDelete(todo) }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
      </button>
    </div>
  )
}

export default Todo
