import React from 'react'
import TodoItem from './TodoItem'
import styles from '../App.module.scss'

export default function TodoList({ todos, deleteToDo, toggleTodoComplete }) {

  return (
    <ul className={`${styles.list} list`}>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          toggleTodoComplete={toggleTodoComplete}
          deleteToDo={deleteToDo}
          {...todo} />
      )}
    </ul>
  )
}

