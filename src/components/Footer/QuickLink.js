import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  gridmain: {
    fontFamily: 'Oswald',
    fontWeight: 400,
    width: '30%',
    padding: '3%',
    '& .MuiSvgIcon-root': {
      color: 'white',
      fontSize: '1.2rem',
    },
    '& .MuiListItemText-root': {
      color: '#b7b7b7',
      fontFamily: 'Roboto Helvetica, Arial, sans-serif',

      lineHeight: '1.5',
      '& .MuiTypography-body1': {
        fontSize: '1.2rem !important',
      },
      '&:hover': {
        color: theme.palette.white,
      },
    },
    '& .mediaIcons': {
      '& .MuiSvgIcon-root': {
        color: 'white',
        fontSize: '2.3rem',
      },
    },
    '& .fb': {
      '& .MuiSvgIcon-root': {
        '&:hover': {
          color: '#1877f2',
        },
      },
    },
    '& .insta': {
      '& .MuiSvgIcon-root': {
        '&:hover': {
          color: '#3f729b',
        },
      },
    },
    '& .twit': {
      '& .MuiSvgIcon-root': {
        '&:hover': {
          color: '#1DA1F2',
        },
      },
    },
  },
}));
function QuickLink(props) {
  const classes = useStyles();
  return (
    <div className={classes.gridmain}>
      <h3>QUICK LINKS</h3>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <LocationOnIcon fontSize="md" />
          </ListItemIcon>
          <ListItemText primary="Military Station, Jaipur" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhoneIcon fontSize="md" />
          </ListItemIcon>
          <ListItemText primary="+91-xxxxxxxxxx" />
        </ListItem>
        <ListItem>
          <ListItemIcon className="mediaIcons twit">
            <TwitterIcon fontSize="lg" />
          </ListItemIcon>
          <ListItemIcon className="mediaIcons fb">
            <FacebookIcon fontSize="md" />
          </ListItemIcon>
          <ListItemIcon className="mediaIcons insta">
            <InstagramIcon fontSize="md" />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}

export default QuickLink;
