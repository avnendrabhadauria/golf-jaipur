import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  gridmain: {
    fontFamily: 'Oswald',
    fontWeight: 400,
    width: '30%',
    padding: '3%',
    '& .MuiSvgIcon-root': {
      color: 'red',
      fontSize: '1rem',
    },
    '& .MuiListItemText-root': {
      color: '#96cb41',
      fontFamily: 'Roboto Helvetica, Arial, sans-serif',

      lineHeight: '1.5',
      '& .MuiTypography-body1': {
        fontSize: '1.2rem !important',
      },
      '&:hover': {
        color: theme.palette.white,
      },
    },
  },
}));
function Contacts(props) {
  const classes = useStyles();
  return (
    <div className={classes.gridmain}>
      <h3>CONTACTS</h3>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <ArrowForwardIosIcon fontSize="sm" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArrowForwardIosIcon fontSize="sm" />
          </ListItemIcon>
          <ListItemText primary="Training" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArrowForwardIosIcon fontSize="sm" />
          </ListItemIcon>
          <ListItemText primary="Training" />
        </ListItem>
      </List>
    </div>
  );
}

export default Contacts;
