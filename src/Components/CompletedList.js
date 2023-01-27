import React from 'react';
import styles from './Completed.module.css';
import Todo from './Todo';
// @ts-check

const CompletedList = ({ completed, setCompleted, setTodoList, todoList }) => {
  function handleChange(e) {
    const value = e.target.nextElementSibling.innerText;
    const completedCopy = [...completed];
    const filtered = completedCopy.filter((item) => item !== value);
    setCompleted(filtered);
    const todoListCopy = [...todoList];
    todoListCopy.push(value);
    setTodoList(todoListCopy);
  }

  return (
    <div>
      {completed.map((todo, idx) => (
        <div className={styles.completed} key={idx}>
          <input
            onChange={handleChange}
            className={styles.checkmark}
            type="checkbox"
            name={idx}
            checked={completed.includes(todo)}
          />
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default CompletedList;
