import React, { useState } from 'react';
import  { Link, NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sideMenu: false,
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, sideMenu: open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key='Ballot'>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary='Ballot' />
        </ListItem>
      </List>
    </div>
  );

  return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' 
            aria-label='menu' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              election-dapp
            </Typography>
            <IconButton edge='end' aria-label='account of current user' color='inherit'>
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={state.sideMenu} onClose={toggleDrawer(false)}>
          {sideList()}
        </Drawer>
      </div>
  );
}

export default Navbar;

