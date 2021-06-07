import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({ handleTodoSubmission }) => {
  const [todoItem, setTodoItem] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleChangeInput = (event) => {
    setTodoItem(event.target.value)
  }

  const handleSubmitButton = () => {
    if (!todoItem) {
      alert('field can not be blank!')
      return false
    }

    handleTodoSubmission(todoItem)
    setTodoItem('')
  }

  const hanldeCheckBox = (e) => {
    setDisabled(!e.target.checked)
  }

  return (
    <div>
      <input
        type="text"
        style={{ width: '200px' }}
        onChange={handleChangeInput}
        value={todoItem}
      />

      <input type="checkbox" onClick={hanldeCheckBox} />
      <button onClick={handleSubmitButton} disabled={disabled}>
        Submit
      </button>
    </div>
  )
}

TodoForm.propTypes = {
  handleTodoSubmission: PropTypes.func
}

export default TodoForm
