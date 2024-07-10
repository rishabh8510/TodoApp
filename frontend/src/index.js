
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoInput from './features/todos/TodoInput';
import TodoList from './features/todos/TodoList';
import { Container, Typography } from '@material-ui/core';

const App = () => (
  <Container maxWidth="sm">
    <Typography variant="h4" align="center" gutterBottom>
      Todo List
    </Typography>
    <TodoInput />
    <TodoList />
  </Container>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
