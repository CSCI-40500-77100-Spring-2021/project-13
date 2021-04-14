import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import Event from './Event';
import 'react-datepicker/dist/react-datepicker.css';

const Events = ({ events, onAddEvent, onEventReminder, onDoneEvent }) => {
  const [userInput, setUserInput] = useState('');
  const [date, setDate] = useState(new Date());

  const handleChnage = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    onAddEvent(userInput, moment(date).format('llll'));
    setUserInput('');
    setDate(new Date());
  };

  return (
    <div>
      <Form onSubmit={handleAddEvent}>
        <FormGroup>
          <Label for="exampleTodo" className="subtitle pt-2">
            Add Event
          </Label>
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
          <div style={{textAlign: 'center'}}>
            <DatePicker
              className="date-picker"
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="P @ p"
              showTimeSelect
            />
          </div>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Add</Button>
        <div>
          {events.map((event) => {
            return (
              <React.Fragment key={event.id}>
                <Event
                  event={event}
                  onEventReminder={onEventReminder}
                  onDoneEvent={onDoneEvent}
                />
              </React.Fragment>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default Events;
