import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';

import Event from './Event';
import 'react-datepicker/dist/react-datepicker.css';

const Tasks = ({ events, onAddEvent, onEventReminder, onDoneEvent }) => {
  const [userInput, setUserInput] = useState('');
  const [date, setDate] = useState(new Date());

  const handleChnage = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    onAddEvent(userInput);
    setUserInput('');
  };

  return (
    <div>
      <Form onSubmit={handleAddEvent}>
        <FormGroup>
          <Label for="exampleTodo">Add Event</Label>
          <Input
            type="todo"
            name="todo"
            id="exampleTodo"
            placeholder="What's on your mind?"
            value={userInput}
            onChange={handleChnage}
            required
          />
        </FormGroup>
        <FormGroup>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="P @ p"
            showTimeSelect
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Add</Button>
        <div>
          {events.map((event) => {
            return (
              <Event
                event={event}
                onEventReminder={onEventReminder}
                onDoneEvent={onDoneEvent}
              />
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default Tasks;
