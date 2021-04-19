import { Grid } from '@material-ui/core';
import { Offer } from './card';
import React from 'react';
import icon01 from '../../assests/images/icon-01.png';
import icon02 from '../../assests/images/icon-02.png';
import icon03 from '../../assests/images/icon-03.png';
import icon04 from '../../assests/images/icon-04.png';

function OurOffers(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <h2
          style={{
            padding: '42px',
            'text-align': 'center',
            'font-size': '3rem',
          }}
        >
          Our Offers
        </h2>
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
          <Offer
            img={icon01}
            heading="QUALIFIED INSTRUCTORS"
            description="Our qualified instructors will help you make a better start in your golf training"
          />
          <Offer
            img={icon02}
            heading="HIGH-QUALITY EQUIPMENT"
            description="Our qualified instructors will help you make a better start in your golf training"
          />
          <Offer
            img={icon03}
            heading="18-HOLE GOLF COURSE"
            description="Our qualified instructors will help you make a better start in your golf training"
          />
          <Offer
            img={icon04}
            heading="REGULAR COMPETITIONS"
            description="Our qualified instructors will help you make a better start in your golf training"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OurOffers;
