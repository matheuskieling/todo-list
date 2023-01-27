import React from 'react';
import styles from './AddTodo.module.css';

const AddToDo = ({ setTodoList, todoList, completed, setCompleted }) => {
  const [value, setValue] = React.useState('');

  function handleReset() {
    const newList = [];
    setTodoList(newList);
    localStorage.setItem('todolist', newList);
  }

  function handleClick(e) {
    const value = e.target.previousElementSibling.value;
    if (!value.length) return;
    const newList = [...todoList, value];
    setTodoList(newList);
    localStorage.setItem('todolist', newList);
    setValue('');
  }

  function handleClearDone() {
    const newCompleted = [];
    setCompleted(newCompleted);
    localStorage.setItem('completed', completed);
  }

  return (
    <>
      <input
        className={styles.addtodo}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            document.querySelector('#adicionar').click();
          }
        }}
      />
      <button id="adicionar" className={styles.adicionar} onClick={handleClick}>
        +
      </button>
      <button disabled={!todoList.length} onClick={handleReset}>
        Limpar Lista
      </button>
      <button disabled={!completed.length} onClick={handleClearDone}>
        Limpar Completos
      </button>
    </>
  );
};

export default AddToDo;
