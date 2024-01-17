import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteToDo, toggleTodoComplete } from '../store/todoSlice'
import styles from '../App.module.scss'

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch()

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))} />
      <span className={styles.text}>{text}</span>
      <span className={styles.delete} onClick={() => dispatch(deleteToDo({id}))}>&times;</span>
    </li>
  )
}


