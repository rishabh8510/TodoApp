import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { editTodoAsync } from './todosSlice';

const EditTodo = ({ todo, open, onClose }) => {
  const [text, setText] = useState(todo ? todo.text : '');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (todo && text.trim()) {
      dispatch(editTodoAsync({ id: todo._id, text }));
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodo;
