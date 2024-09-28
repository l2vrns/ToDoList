import React, { useState } from 'react'

export const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }


    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='todo-input'
                placeholder='New task !'
                onChange={handleChange}
                value={value}
                required
            />
            <button type='sumbit' className='todo-btn'>
                Add Task !</button>
        </form>
    )
}
