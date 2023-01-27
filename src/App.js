import React from 'react';
import AddToDo from './Components/AddToDo';
import TodoList from './Components/TodoList';
import './App.css';
import CompletedList from './Components/CompletedList';
function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);

  React.useEffect(() => {
    const localList = localStorage.getItem('todolist');
    const localCompleted = localStorage.getItem('completed');
    if (localList) {
      const localListArray = localList.split(',');
      setTodoList(localListArray);
    }
    if (localCompleted) {
      const localCompletedArray = localCompleted.split(',');
      setCompleted(localCompletedArray);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todolist', todoList);
    localStorage.setItem('completed', completed);
  }, [todoList, completed]);

  return (
    <>
      <div className="title">
        <h1>Minha Lista</h1>
      </div>

      <AddToDo
        setTodoList={setTodoList}
        todoList={todoList}
        setCompleted={setCompleted}
        completed={completed}
      />
      <TodoList
        todoList={todoList}
        setCompleted={setCompleted}
        setTodoList={setTodoList}
        completed={completed}
      />
      <div className="title">
        <h1>Completed</h1>
      </div>
      <CompletedList
        setTodoList={setTodoList}
        todoList={todoList}
        setCompleted={setCompleted}
        completed={completed}
      />
    </>
  );
}

export default App;
