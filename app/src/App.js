import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Ballot from './components/Ballot';
import Navbar from './components/Navbar';
import Home from './components/Home';


const useStyles = makeStyles(theme => ({
  content: {
    paddingRight: theme.spacing(20),
    paddingLeft: theme.spacing(20)
  },
}));

const App = () => {
  const classes = useStyles();

  return (
      <BrowserRouter>
        <Navbar />
        <Switch className={classes.content}>
          <Route path='/' exact component={Home} />
          <Route path='/Ballot' component={Ballot} />
          <Route path='/Results' component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
