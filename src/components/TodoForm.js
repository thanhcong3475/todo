import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      addTodo(value)
      setValue('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' value={value} className='todo-input' placeholder='Enter Task' onChange={(e) => setValue(e.target.value)} />
        <button className='todo-btn' type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
