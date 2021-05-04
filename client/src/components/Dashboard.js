import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Tabs, Tab, Button } from '@material-ui/core';
import moment from 'moment';

import Day from './Day';
import TodoList from './TodoList/TodoList';
import { TabPanel, a11yProps } from './Util';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const [date] = useState(new Date());
  const [value, setValue] = useState(0);

  const toggle = (event, newValue) => {
    setValue(newValue);
  };

  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await signOut();
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="md">
      <header className="header">
        <h2 className="brand">myDay</h2>
        <Button
          style={{ borderRadius: '50px', backgroundColor: '#F88379' }}
          variant="contained"
          onClick={handleSignOut}
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
        <TodoList />
      </TabPanel>
    </Container>
  );
};

export default Dashboard;
