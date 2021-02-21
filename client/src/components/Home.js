import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div>
      <header className="header">
        <h2>Hello</h2>
        <Link to="/">
          <Button className="btn-lg btn-dark">Logout</Button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
