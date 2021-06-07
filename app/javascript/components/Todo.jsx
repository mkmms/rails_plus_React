import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const styles = {
  padding: '100px',
  textAlign: 'center'
}

const left = {
  float: 'left',
  width: '300px'
}

const right = {
  float: 'right',
  width: '300px'
}

const Todo = () => {
  // listItems = [1, 2, 3, 4, 5]
  // listItems.push(6)
  // setListItems( listItems ) [1, 2, 3, 4, 5, 6]

  const [listItems, setListItems] = useState([])

  const handleTodoSubmission = (todoItem) => {
    let items = [...listItems]
    items.push(todoItem)
    setListItems(items)
  }

  const handleRemove = (index) => {
    let availableItems = listItems.filter((item, i) => index !== i)
    setListItems(availableItems)
  }

  return (
    <div style={styles}>
      <div style={left}>
        <TodoForm handleTodoSubmission={handleTodoSubmission} />
      </div>
      <div style={right}>
        <TodoList listItems={listItems} handleRemove={handleRemove} />
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default Todo
