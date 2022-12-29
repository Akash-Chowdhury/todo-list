import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be blank.");
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className=' container mt-3'>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control my-2" id="title" name='title' aria-describedby="emailHelp" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control my-2" id="desc" name='desc' />
                </div>

                <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
