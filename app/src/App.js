import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Ballot from './components/Ballot';
import Candidates from './components/Candidates';
import Results from './components/Results';
import Contact from './components/Contact';
import { Container } from '@material-ui/core';


const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Ballot' component={Ballot} />
            <Route path='/Candidates' component={Candidates} />
            <Route path='/Results' component={Results} />
            <Route path='/Contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </Container>
      </BrowserRouter>
  );
}

export default App;
