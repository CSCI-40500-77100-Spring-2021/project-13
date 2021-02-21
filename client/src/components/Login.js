import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import classnames from 'classnames';

import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="login-container">
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
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Create Account
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Form className="login-form">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="demo@myday.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="p@$$w0rd"
                required
              />
            </FormGroup>
            <Link to="/dashboard">
              <Button className="btn-lg btn-dark btn-block">Login</Button>
            </Link>
          </Form>
        </TabPane>
        <TabPane tabId="2">
          <Form className="login-form">
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="myDay"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="demo@myday.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="p@$$w0rd"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Confirm Passowrd</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="p@$$w0rd"
                required
              />
            </FormGroup>
            <Link to="/dashboard">
              <Button className="btn-lg btn-dark btn-block">Submit</Button>
            </Link>
          </Form>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Login;
