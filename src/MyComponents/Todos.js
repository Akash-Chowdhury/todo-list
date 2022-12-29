import React from 'react'
import TodoItem from './TodoItems'
import data from './data.gif';


const Todos = (props) => {
  const mystyle = {
    minHeight: "70vh",
    margin: "50px, auto",
  }
let iconstyle={
    width:"400px",
    height:"400px",
}
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='text-center my-3'>{props.title}</h3>
      {props.todos.length === 0 ? <>
      <div className='d-flex flex-column justify-content-center align-self-center'>
      <h4 className='text-center mt-5 text-danger'>No todos found !!</h4> 
      <img src={data} alt='icon' style={iconstyle} className='d-flex flex-column justify-content-center align-self-center'></img>
      </div>
      </>:
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.slno} onDelete={props.onDelete} />
            </>
          )
        })

      }
    </div>
  )
}

export default Todos
