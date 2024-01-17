import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import styles from '../App.module.scss'

export default function TodoList() {
  const todos = useSelector(state => state.todos.todos)

  return (
    <ul className={`${styles.list} list`}>
      {todos.map(todo =>
        <TodoItem key={todo.id} {...todo} />
      )}
    </ul>
  )
}

