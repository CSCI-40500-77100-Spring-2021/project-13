import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Dashboard.css';
import './Util.css'
import TodoList from './TodoList';

const Dashboard = () => {
  return (
    <div className="container">
      <header className="header">
        <h2 className="brand">myDay</h2>
        <Link to="/">
          <Button className="btn-lg btn-dark">Sign Out</Button>
        </Link>
      </header>

      <TodoList />
    </div>
  );
};

export default Dashboard;
