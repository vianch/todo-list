import React, { useState, useEffect } from 'react';
import get from 'lodash/get';

// Services
import { httpGet } from "./services/rest.api";

// Component
import { List, AddList } from './components';
import { endpoints } from "./services/constants";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addListHandler = listItem => {
    if (listItem.length > 0 ) {
      setTodoList(prevArray => [...prevArray, listItem]);
    }
  };

  const loadTodos = () => {
    httpGet(endpoints.getTodos())
      .then(response => {
        if(response.success) {
          const todoData = get(response, 'todo', []);
          setTodoList(todoData);
        }
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <h1>My todo list</h1>

      <div>
        <List todoList={todoList}/>
        <AddList onAddList={addListHandler} />
      </div>
    </div>
  );
};

export default App;
