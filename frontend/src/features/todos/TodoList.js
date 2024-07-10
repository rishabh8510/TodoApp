import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodoAsync, deleteTodoAsync, editTodoAsync } from './todosSlice';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ViewTodo from './ViewTodo';
import EditTodo from './EditTodo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [viewTodo, setViewTodo] = useState(null);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo._id} dense button onClick={() => dispatch(toggleTodoAsync(todo._id))}>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={todo.text} />
            <IconButton edge="end" aria-label="view" onClick={() => setViewTodo(todo)}>
              <VisibilityIcon />
            </IconButton>
            <IconButton edge="end" aria-label="edit" onClick={() => setEditTodo(todo)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTodoAsync(todo._id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <ViewTodo todo={viewTodo} open={!!viewTodo} onClose={() => setViewTodo(null)} />
      <EditTodo todo={editTodo} open={!!editTodo} onClose={() => setEditTodo(null)} />
    </div>
  );
};

export default TodoList;
