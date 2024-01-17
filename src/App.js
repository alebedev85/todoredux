import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('')
    }
  }

  return (
    <div className={styles.app}>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button className={styles.button} onClick={addTodo}>Add</button>
      </label>

      <ul className={`${styles.list} list`}>
        {todos.map(todo =>
          <li key={todo.id}>
            <input type='checkbox' />
            <span className={styles.text}>{todo.text}</span>
            <span className={styles.delete}>&times;</span>
          </li>)}
      </ul>

    </div>
  );
}

export default App;
