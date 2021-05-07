import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';

import Todo from './Todo';
import { useStyles } from '../../Util';

const Todos = ({ todos, onAddTodo, onDoneTodo, onDeleteItem }) => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState('');

  const handleChnage = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(userInput);
    setUserInput('');
  };
  return (
    <>
      <form
        onSubmit={handleAddTodo}
        noValidate
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          marginTop={2}
          className={classes.label}
          autoComplete="off"
          style={{ flex: '1' }}
        >
          <TextField
            id="outlined-basic"
            fullWidth={true}
            required={true}
            label="Add A To-Do"
            variant="outlined"
            value={userInput}
            onChange={handleChnage}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          style={{
            marginTop: '20px',
            marginLeft: '10px',
            background: '#90c695',
            borderRadius: '50px',
          }}
        >
          Add
        </Button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <React.Fragment key={todo.id}>
              <Todo
                todo={todo}
                onDoneTodo={onDoneTodo}
                onDeleteItem={onDeleteItem}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
