import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  return (
    <div>
      <Form className="login-form">
        <FormGroup>
          <Label for="exampleEmail" className="subtitle pt-2">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="demo@myday.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="subtitle">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="p@$$w0rd"
            required
          />
        </FormGroup>
        <Link to="/dashboard">
          <Button className="btn-lg btn-dark btn-block">SIGN IN</Button>
        </Link>
      </Form>
    </div>
  );
};

export default SignInForm;
