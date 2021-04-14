import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Banner from 'react-js-banner';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Home = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="background-home">
      <div className="container">
        <Banner title="No email needed, click 'SIGN IN'" visibleTime={2000} />
        <h3 className="text-center greeting pt-4">
            Welcome to <span className="font-weight-bold border-bottom border-white">myDay</span>
          </h3>
        <div className="card-container">
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
    </div>
  );
};

export default Home;
