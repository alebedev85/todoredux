import { useState } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import styles from './App.module.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('')

  const addToDo = () => {
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
              completed: !todo.completed
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
      <InputField
        text={text}
        setText={setText}
        addToDo={addToDo}
      />

      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        deleteToDo={deleteToDo} />

    </div>
  );
}

export default App;
