import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

const TodoList = (props) => {
  return (
    <ul style={styles.ul}>
      { props.todos.map((todo, idx) => {
        return (
          <TodoItem
            todo={todo}
            index={idx}
            key={todo.id}
            onChange={props.onToggle}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList