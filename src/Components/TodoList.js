import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todoList, setTodoList, setCompleted, completed }) => {
  function handleChange(e) {
    const value = e.target.nextElementSibling.innerText;
    const listCopy = [...todoList];
    const filteredTodo = listCopy.filter((todo) => todo === value);
    const newList = listCopy.filter((todo) => todo !== filteredTodo[0]);
    setCompleted([...completed, filteredTodo[0]]);
    setTodoList(newList);
  }

  return (
    <div>
      {todoList.map((todo, idx) => (
        <div className={styles.todoList} key={idx}>
          <input
            className={styles.checkmark}
            type="checkbox"
            name={idx}
            onChange={handleChange}
            value={todo}
            checked={!todoList.includes(todo)}
          />
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
