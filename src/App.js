import React, { useState } from 'react';

import { List, AddList } from './components';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addListHandler = listItem => {
    if (listItem.length > 0 ) {
      setTodoList(prevArray => [...prevArray, listItem]);
    }
  };

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
