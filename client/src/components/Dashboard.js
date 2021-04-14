import { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

import TodoList from './TodoList/';

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
      day: 'Tue, Mar 23, 2021 9:45 PM',
    },
    {
      id: 2,
      text: 'Submit the prototype',
      day: 'Wed, Mar 24, 2021 11:59 PM',
    },
    {
      id: 3,
      text: 'Study for midterm',
      day: 'Mon, Mar 29, 2021 11:00 AM'
    }
  ]);

  const [reminders, setReminders] = useState('');
  const [completedItems, setCompletedItems] = useState('');
  const [username, setUsername] = useState("John");
  const [hour, setHour] = useState(new Date());

  const greet = (hour, username) => {
    var greet;
    if (hour < 12)
      greet = `Good Morning, ${username}`;
    else if (hour >= 12 && hour < 18)
      greet = `Good Afternoon, ${username}`;
    else if (hour >=18 && hour <= 24) {
      greet = `Good Evening, ${username}`;
    }

    return greet;
  }

  const addTodo = (userInput) => {
    let prevTodos = [...todos];
    prevTodos = [
      ...prevTodos,
      { id: todos.length + 1, text: userInput, reminder: false },
    ];
    setTodos(prevTodos);
  };

  const addEvent = (userInput, date) => {
    let prevEvents = [...events];
    prevEvents = [
      ...prevEvents,
      {
        id: events.length + 1,
        text: userInput,
        day: date,
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
    <div className="background-dashboard">
      <div className="container">
        <header className="header">
          <h2 className="brand">myDay</h2>
          <Link to="/">
            <Button className="btn-lg btn-dark">Sign Out</Button>
          </Link>
        </header>

        <div className="greeting-container">
          <h2 className="greeting">{greet(hour.getHours(), username)}</h2>
          <div className="day-weather">
            <div className="day-info">
              <p>{moment(hour).format('dddd')}</p>
              <p>{moment(hour).format('LL')}</p>
            </div>
            <div className="weather-info">
              <p>52°F</p>
              <p>Rainy</p>
            </div>
          </div>
        </div>

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
