import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div>
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
          <Button className="btn-lg btn-dark btn-block">SIGN UP</Button>
        </Link>
      </Form>
    </div>
  );
};

export default SignUpForm;
