import { useState } from 'react';
import { Container, Tabs, Tab, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Day from './Day';
import TodoList from './TodoList/TodoList';
import { TabPanel, a11yProps } from './Util';

const Dashboard = () => {
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

  const [reminders, setReminders] = useState('');
  const [completedItems, setCompletedItems] = useState('');
  const [date] = useState(new Date());
  const [value, setValue] = useState(0);

  const toggle = (event, newValue) => {
    setValue(newValue);
  };

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

  const deleteCompletedItem = (item) => {
    setCompletedItems(
      completedItems.filter((completedItem) => completedItem.id !== item.id)
    );
  };

  return (
    <Container maxWidth="md">
      <header className="header">
        <h2 className="brand">myDay</h2>
        <Button
          href="/"
          variant="contained"
          style={{ borderRadius: '50px', backgroundColor: '#F88379' }}
        >
          Sign Out
        </Button>
      </header>

      <Tabs
        style={{
          background: 'rgb(34,193,195)',
          borderRadius: '50px',
          marginTop: '20px',
        }}
        value={value}
        onChange={toggle}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
        aria-label="scrollable auto tabs"
      >
        <Tab label={`${moment(date).format('ll')}`} {...a11yProps(0)} />
        <Tab label="Tasks" {...a11yProps(1)} />
        <Tab label="Journal" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Day />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList
          todos={todos}
          onAddTodo={addTodo}
          events={events}
          onAddEvent={addEvent}
          onDoneTodo={doneTodo}
          onDoneEvent={doneEvent}
          reminders={reminders}
          completedItems={completedItems}
          onDeleteCompletedItem={deleteCompletedItem}
        />
      </TabPanel>
    </Container>
  );
};

export default Dashboard;
