import { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'react-js-banner';

import './Dashboard.css';
import './Util.css';
import TodoList from './TodoList';

const Dashboard = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Work on myDay prototype',
    },
    {
      id: 2,
      text: 'Submit the prototype',
    },
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      text: 'Zoom meeting w/ Charles',
      day: 'Tuesday',
    },
    {
      id: 2,
      text: 'Study chapter 3',
      day: 'Thursday',
    },
    {
      id: 3,
      text: 'myDay team meeting',
      day: 'Thursday',
    },
  ]);

  const [reminders, setReminders] = useState('');
  const [completedItems, setCompletedItems] = useState('');

  const addTodo = (userInput) => {
    let prevTodos = [...todos];
    prevTodos = [
      ...prevTodos,
      { id: todos.length + 1, text: userInput, reminder: false },
    ];
    setTodos(prevTodos);
  };

  const addEvent = (userInput) => {
    let prevEvents = [...events];
    prevEvents = [
      ...prevEvents,
      {
        id: events.length + 1,
        text: userInput,
        day: 'Monday',
      },
    ];
    setEvents(prevEvents);
  };

  const addTodoReminder = (item) => {
    let prevReminders = [...reminders];

    prevReminders = [
      ...prevReminders,
      {
        id: reminders.length + 1,
        text: item.text,
      },
    ];
    setReminders(prevReminders);
  };

  const addEventReminder = (item) => {
    let prevReminders = [...reminders];
    prevReminders = [
      ...prevReminders,
      {
        id: reminders.length + 1,
        text: item.text,
      },
    ];
    setReminders(prevReminders);
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

  const doneReminder = (item) => {
    let prevCompletedItems = [...completedItems];
    prevCompletedItems = [
      ...prevCompletedItems,
      {
        id: completedItems.length + 1,
        text: item.text,
      },
    ];
    setCompletedItems(prevCompletedItems);
    setReminders(reminders.filter((reminder) => reminder.id !== item.id));
  };

  const deleteCompletedItem = (item) => {
    setCompletedItems(
      completedItems.filter((completedItem) => completedItem.id !== item.id)
    );
  };

  return (
    <div className="background-c pb-5">
      <div className="container">
        <header className="header">
          <h2 className="brand">myDay</h2>
          <h2 className="brand">Good Afternoon</h2>
          <Link to="/">
            <Button className="btn-lg btn-dark">Sign Out</Button>
          </Link>
        </header>

        <Banner
          title="Add a To-Do or an Event! Few To-Dos and Events are added already as default!"
          visibleTime={2000}
        />
        <Banner
          title="Click the 'clock' icon to set a Reminder!"
          visibleTime={4000}
        />
        <Banner
          title="Click the 'check' icon to complete a To-Do or an event!"
          visibleTime={6000}
        />
        <Banner
          title="Click the 'trash' icon to delete a completed item!"
          visibleTime={8000}
        />
        <Banner
          title="Please note, few features are not working correclty at the moment! Stay tuned for an update!"
          visibleTime={10000}
        />

        <TodoList
          todos={todos}
          onAddTodo={addTodo}
          events={events}
          onAddEvent={addEvent}
          onDoneTodo={doneTodo}
          onDoneEvent={doneEvent}
          reminders={reminders}
          onTodoReminder={addTodoReminder}
          onEventReminder={addEventReminder}
          onDoneReminder={doneReminder}
          completedItems={completedItems}
          onDeleteCompletedItem={deleteCompletedItem}
        />
      </div>
    </div>
  );
};

export default Dashboard;
