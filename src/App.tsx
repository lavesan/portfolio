import React from 'react';
import './App.scss';
import { SinglePage }  from './pages/SPA1';
import { HomePage } from './pages/home';
import { HeaderComponent } from './components/header'

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="site-box">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" redirectTo="/home" />
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
