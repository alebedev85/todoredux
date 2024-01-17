import React from 'react'
import styles from '../App.module.scss'

export default function InputField({text, setText, addToDo}) {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button className={styles.button} onClick={addToDo}>Add</button>
    </label>
  )
}

