import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const ViewTodo = ({ todo, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>View Todo</DialogTitle>
      <DialogContent>
        {todo && (
          <div>
            <p>Text: {todo.text}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewTodo;
