import { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import Todos from './Todo/Todos';
import Events from './Event/Events';
import Reminders from './Reminder/Reminders';
import CompletedItems from './Completed/CompletedItems';
import { TabPanel, a11yProps } from '../Util';

const TodoList = ({
  todos,
  onAddTodo,
  events,
  onAddEvent,
  onDoneTodo,
  onDoneEvent,
  reminders,
  onTodoReminder,
  onEventReminder,
  onDoneReminder,
  completedItems,
  onDeleteCompletedItem,
}) => {
  const [value, setValue] = useState(0);

  const toggle = (event, newValue) => {
    setValue(newValue);
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
          onAddTodo={onAddTodo}
          onTodoReminder={onTodoReminder}
          onDoneTodo={onDoneTodo}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Events
          events={events}
          onAddEvent={onAddEvent}
          onEventReminder={onEventReminder}
          onDoneEvent={onDoneEvent}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompletedItems
          completedItems={completedItems}
          onDeleteCompletedItem={onDeleteCompletedItem}
        />
      </TabPanel>
    </div>
  );
};

export default TodoList;
