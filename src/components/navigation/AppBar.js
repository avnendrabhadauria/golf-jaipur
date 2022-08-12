import AppBar from '@material-ui/core/AppBar';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Menu from './header/Menu';
import React from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
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
          <Menu
            className={classes.root}
            name="Membership"
            icon={<CardMembershipIcon fontSize="large" />}
          />
          <Menu
            className={classes.root}
            name="Administration"
            icon={<SupervisorAccountIcon />}
          />
          <Menu
            className={classes.root}
            name="Bar"
            icon={<LocalBarIcon fontSize="large" />}
          />
          <Menu
            className={classes.root}
            name="Restaurant"
            icon={<RestaurantIcon />}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default AppBa;
