import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ listItems, handleRemove }) => {
  return (
    <div>
      <ul>
        {listItems.map((listItem, index) => {
          return (
            <li key={index}>
              {listItem}
              <a style={{ color: 'red' }} onClick={() => handleRemove(index)}>
                remove
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  listItems: PropTypes.array,
  handleRemove: PropTypes.func
}

export default TodoList
