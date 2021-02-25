import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Banner from 'react-js-banner';

import Todos from './Todo/Todos';
import Events from './Event/Events';
import Reminders from './Reminder/Reminders';
import CompletedItems from './Completed/CompletedItems';
import './Util.css';

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
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="card-container">
      <Banner title="Add a To-Do or an Event! Few To-Dos and Events are added already as default!" visibleTime={3000} />
      <Banner
        title="Click the 'clock' icon to set a Reminder!"
        visibleTime={6000}
      />
      <Banner
        title="Click the 'check' icon to complete a To-Do or an event!"
        visibleTime={9000}
      />
      <Banner
        title="Click the 'trash' icon to delete a completed item!"
        visibleTime={12000}
      />
      <Banner
        title="Please note, few features are not working correclty at the moment! Stay tuned for an update!"
        visibleTime={15000}
      />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Reminders ({reminders.length})
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            To-Dos ({todos.length})
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Events ({events.length})
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => {
              toggle('4');
            }}
          >
            Completed ({completedItems.length})
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Reminders reminders={reminders} onDoneReminder={onDoneReminder} />
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="2">
          <Todos
            todos={todos}
            onAddTodo={onAddTodo}
            onTodoReminder={onTodoReminder}
            onDoneTodo={onDoneTodo}
          />
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="3">
          <Events
            events={events}
            onAddEvent={onAddEvent}
            onEventReminder={onEventReminder}
            onDoneEvent={onDoneEvent}
          />
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="4">
          <CompletedItems
            completedItems={completedItems}
            onDeleteCompletedItem={onDeleteCompletedItem}
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TodoList;
