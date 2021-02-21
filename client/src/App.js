import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
