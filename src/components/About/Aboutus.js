import { Button, Divider, Grid, makeStyles } from '@material-ui/core';

import React from 'react';
import backgroudImage from '../../assests/images/About.jpg';

const useStyles = makeStyles((theme) => ({
  aboutpic: {
    background: `#ffffff url(${backgroudImage}) no-repeat center center `,
    width: '50%',
    height: '500px',
    backgroundSize: 'cover',
  },
  aboutDesc: {
    width: '50%',
    height: '500px',
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  gridmain: {
    margin: '65px 0',
    width: '100%',
    background: theme.palette.semiGrey,
  },
  divider: {
    width: '20%',
    background: theme.palette.primary.main,
    height: '1%',
  },
}));
function About(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.gridmain}>
      <Grid
        item
        xs={12}
        style={{ paddingTop: 0, paddingBottom: 0, display: 'flex' }}
      >
        <div className={classes.aboutpic}></div>
        <div className={classes.aboutDesc}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1> A Few Words About Us</h1>
            <Divider color="primary" className={classes.divider} />
            <p style={{ width: '60%' }}>
              Located not far from a forest of eucalyptus and pine trees with
              the back-drop of the snowcapped Taurus Mountains, our Golf Club
              has something to offer any player, even with a little experience.
            </p>
            <Button color="primary" variant="contained">
              Learn More
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export { About };
