import { useState } from 'react';
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
          <Label for="exampleTodo">Add To-Do</Label>
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
              <Todo
                todo={todo}
                onTodoReminder={onTodoReminder}
                onDoneTodo={onDoneTodo}
              />
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default Todos;
