import { Grid, makeStyles } from '@material-ui/core';

import About from './About';
import Contacts from './Contacts';
import QuickLink from './QuickLink';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  gridmain: {
    margin: '65px 0 0 0',
    color: 'white',
    background: '#333335',
    display: 'flex',
    justifyContent: 'center',
  },
}));
function Footer(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridmain}>
      <About />
      <Contacts />
      <QuickLink />
    </Grid>
  );
}

export default Footer;
