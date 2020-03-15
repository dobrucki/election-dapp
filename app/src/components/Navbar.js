import React from 'react';
import  { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';

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

const Navbar = (props) => {
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
        <ListItem button key='Home' component={Link} to='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button key='Ballot' component={Link} to='/Ballot'>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary='Ballot' />
        </ListItem>
        <ListItem button key='Candidates' component={Link} to='/Candidates'>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary='Candidates' />
        </ListItem>
        <ListItem button key='Results' component={Link} to='/Results'>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary='Results' />
        </ListItem>
        <Divider />
        <ListItem button key='Contact' component={Link} to='/Contact'>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
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
            <Avatar button>T</Avatar>
            <Typography>
              {props.accounts}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={state.sideMenu} onClose={toggleDrawer(false)}>
          {sideList()}
        </Drawer>
      </div>
  );
}

export default Navbar;

