import { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@material-ui/core';

import SignUp from './SignUp';
import SignIn from './SignIn';
import { TabPanel, a11yProps } from './Util';

const Home = () => {
  const [value, setValue] = useState(0);

  const toggle = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="login-container">
      <Box align="center" paddingTop={5} paddingBottom={3}>
        <Typography component="span" variant="h5">
          Welcome to myDay!
        </Typography>
        <div
          style={{ borderBottom: '1px solid #333', paddingTop: '1rem' }}
        ></div>
      </Box>
      <Tabs
        style={{
          background: 'rgb(34,193,195)',
          background:
            'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(255,174,0,1) 100%)',
          borderRadius: '50px',
        }}
        value={value}
        onChange={toggle}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <Tab label="Sign In" {...a11yProps(0)} />
        <Tab label="Sign Up" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </div>
  );
};

export default Home;
