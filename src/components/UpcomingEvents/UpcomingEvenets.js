import { Divider, Grid, makeStyles } from '@material-ui/core';

import { Event } from './Event';
import React from 'react';
import event1 from '../../assests/images/event1.jpg';
import event2 from '../../assests/images/event2.jpg';
import event3 from '../../assests/images/event3.jpg';

const useStyles = makeStyles((theme) => ({
  aboutpic: {
    width: '50%',
    height: '500px',
    backgroundSize: 'cover',
  },
  divider: {
    width: '10%',
    background: theme.palette.primary.main,
    height: '4%',
  },
}));
function UpcomingEvents() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.gridmain}>
      <Grid
        item
        xs={12}
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px 0',
        }}
      >
        <h1>Upcoming Tournaments</h1>
        <Divider className={classes.divider} />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Event
          backgroudImage={event1}
          heading="MONTHLY CHAMPIONSHIP"
          date=" September 12-15"
        />
        <Event
          backgroudImage={event2}
          heading="OPEN  CHAMPIONSHIP"
          date=" November 12-15"
        />
        <Event
          backgroudImage={event3}
          heading="MEGA CHAMPIONSHIP"
          date=" December 12-15"
        />
      </Grid>
    </Grid>
  );
}
export { UpcomingEvents };
