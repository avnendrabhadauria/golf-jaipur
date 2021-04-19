import AppBar from '@material-ui/core/AppBar';
import Menu from './header/Menu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 1%',
  },
}));
const AppBa = function (props) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="error">
        <Toolbar>
          <Menu className={classes.root} name="Membership" />
          <Menu className={classes.root} name="Administration" />
          <Menu className={classes.root} name="Bar" />
          <Menu className={classes.root} name="Restaurant" />
          <Menu className={classes.root} name="Sticks" />
          <Menu className={classes.root} name="Reports" />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default AppBa;
