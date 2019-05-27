import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainNav from './components/navigation/MainNav';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function MyApp() {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
      </Switch>
    </Router>
  );
}

export default MyApp;
