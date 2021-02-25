import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Home = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="card-container">
        <h3 className="text-center">
          Welcome to <span className="font-weight-bold">myDay</span>
        </h3>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
            >
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <SignInForm />
          </TabPane>
          <TabPane tabId="2">
            <SignUpForm />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Home;
