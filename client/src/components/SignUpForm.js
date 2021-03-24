import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Home.css"

const SignUpForm = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleName" className="subtitle pt-3">Name</Label>
          <Input
            type="name"
            name="name"
            id="exampleName"
            placeholder="myDay"
            required
          />
        </FormGroup>
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
          <Label for="examplePassword" className="subtitle pt-2">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="p@$$w0rd"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="subtitle pt-2">Confirm Passowrd</Label>
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
