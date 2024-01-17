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

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.copmpleted
            }
          }
          return todo
        }
      )
    )
  }

  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
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
            <input
              type='checkbox'
              checked={todo.copmpleted}
              onClick={() => toggleTodoComplete(todo.id)} />
            <span className={styles.text}>{todo.text}</span>
            <span className={styles.delete} onClick={() => deleteToDo(todo.id)}>&times;</span>
          </li>)}
      </ul>

    </div>
  );
}

export default App;
