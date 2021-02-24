import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Dashboard.css';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h2 className="brand">myDay</h2>
        <Link to="/">
          <Button className="btn-lg btn-dark">Sign Out</Button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
