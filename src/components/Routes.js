import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
