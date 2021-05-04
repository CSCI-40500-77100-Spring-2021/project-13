import { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import Todos from './Todo/Todos';
import Events from './Event/Events';
import CompletedItems from './Completed/CompletedItems';
import { TabPanel, a11yProps } from '../Util';

const TodoList = () => {
  const [value, setValue] = useState(0);
  const toggle = (event, newValue) => {
    setValue(newValue);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Fix event tab',
    },
    {
      id: 2,
      text: 'Add the journal',
    },
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      text: 'Meeting w/ myDay team',
      day: 'Tue, Mar 23, 2021',
      time: '9:45 PM',
    },
    {
      id: 2,
      text: 'Submit the prototype',
      day: 'Wed, Mar 24, 2021',
      time: '10:15 AM',
    },
    {
      id: 3,
      text: 'Study for midterm',
      day: 'Mon, Mar 29, 2021',
      time: '4:45 PM',
    },
  ]);

  const [completedItems, setCompletedItems] = useState('');

  const addTodo = (userInput) => {
    if (userInput !== '') {
      let prevTodos = [...todos];
      prevTodos = [...prevTodos, { id: todos.length + 1, text: userInput }];
      setTodos(prevTodos);
    }
  };

  const addEvent = (userInput, day, time) => {
    if (userInput !== '') {
      let prevEvents = [...events];
      prevEvents = [
        ...prevEvents,
        {
          id: events.length + 1,
          text: userInput,
          day: day,
          time: time,
        },
      ];
      setEvents(prevEvents);
    }
  };

  const doneTodo = (item) => {
    let prevCompletedItems = [...completedItems];
    prevCompletedItems = [
      ...prevCompletedItems,
      {
        id: completedItems.length + 1,
        text: item.text,
      },
    ];
    setCompletedItems(prevCompletedItems);
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  const doneEvent = (item) => {
    let prevCompletedItems = [...completedItems];
    prevCompletedItems = [
      ...prevCompletedItems,
      {
        id: completedItems.length + 1,
        text: item.text,
      },
    ];
    setCompletedItems(prevCompletedItems);
    setEvents(events.filter((event) => event.id !== item.id));
  };

  const deleteItem = (group, item) => {
    if (group === 'todo') setTodos(todos.filter((todo) => todo.id !== item.id));
    else if (group === 'event')
      setEvents(events.filter((event) => event.id !== item.id));
    else
      setCompletedItems(
        completedItems.filter((completedItem) => completedItem.id !== item.id)
      );
  };

  return (
    <div className="card-container" style={{ userSelect: 'none' }}>
      <Tabs
        style={{
          background: 'rgba(255,174,0)',
          borderRadius: '50px',
        }}
        value={value}
        onChange={toggle}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
        aria-label="scrollable auto tabs"
      >
        <Tab label={`To-Dos (${todos.length})`} {...a11yProps(0)} />
        <Tab label={`Events (${events.length})`} {...a11yProps(1)} />
        <Tab label={`Completed (${completedItems.length})`} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Todos
          todos={todos}
          onAddTodo={addTodo}
          onDoneTodo={doneTodo}
          onDeleteItem={deleteItem}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Events
          events={events}
          onAddEvent={addEvent}
          onDoneEvent={doneEvent}
          onDeleteItem={deleteItem}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompletedItems
          completedItems={completedItems}
          onDeleteItem={deleteItem}
        />
      </TabPanel>
    </div>
  );
};

export default TodoList;
