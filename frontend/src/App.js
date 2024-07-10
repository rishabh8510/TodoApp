import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoInput from './features/todos/TodoInput';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
