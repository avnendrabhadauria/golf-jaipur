import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridmain: {
    fontFamily: 'Oswald',
    fontWeight: 400,
    width: '30%',
    padding: '3%',
    '& p': {
      color: '#b7b7b7',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  },
}));

function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.gridmain}>
      <h3>ABOUT</h3>
      <p>
        Since vmkmvkmvkfmlvkm dlkmvkfmvlk dmvklfmvkmf lkmvkfmvklf lkmvklfmvklmf
        popular tourist destination attractingckmkldmvk . rved through a forest
        of eucalyptus and pine trees with the backdrop of the snow-capped Taurus
        Mlvldval lakes, our club tests all.
      </p>
    </div>
  );
}

export default About;
