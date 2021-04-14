import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Todo from './Todo';

const Todos = ({ todos, onAddTodo, onTodoReminder, onDoneTodo }) => {
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
    <div>
      <Form onSubmit={handleAddTodo}>
        <FormGroup className="todo-form">
          <Label for="exampleTodo" className="subtitle pt-2">Add To-Do</Label>
          <Input
            type="todo"
            name="todo"
            id="exampleTodo"
            placeholder="What's on your mind?"
            value={userInput}
            onChange={handleChnage}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Add</Button>
        <div>
          {todos.map((todo) => {
            return (
              <React.Fragment key={todo.id}>
                <Todo
                  todo={todo}
                  onTodoReminder={onTodoReminder}
                  onDoneTodo={onDoneTodo}
                />
              </React.Fragment>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default Todos;
