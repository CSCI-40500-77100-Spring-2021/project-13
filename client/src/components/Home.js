import { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@material-ui/core';
import Banner from 'react-js-banner';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { TabPanel, a11yProps, useStyles } from './Util';

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const toggle = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Banner title="No email needed, click 'SIGN IN'" visibleTime={2000} />
      <Box align="center" paddingTop={2}>
        <Typography variant="h4">
          Welcome to{' '}
          <span style={{ fontWeight: 'bold', borderBottom: '1px solid' }}>
            myDay
          </span>
          ...
        </Typography>
      </Box>
      <div className="login-container">
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
          <SignInForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUpForm />
        </TabPanel>
      </div>
    </div>
  );
};

export default Home;
