import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from './todosSlice';
import { TextField, Button } from '@material-ui/core';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodoAsync(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <TextField
        variant="outlined"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: '10px', flex: 1 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
