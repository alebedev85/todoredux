import React from 'react'
import styles from '../App.module.scss'

export default function TodoItem({ id, text, completed, deleteToDo, toggleTodoComplete }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onClick={() => toggleTodoComplete(id)} />
      <span className={styles.text}>{text}</span>
      <span className={styles.delete} onClick={() => deleteToDo(id)}>&times;</span>
    </li>
  )
}


