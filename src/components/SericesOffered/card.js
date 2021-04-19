import { Divider, makeStyles } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    'max-width': '22%',
    padding: '40px 15px',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    '&:hover': {
      border: `1px solid ${theme.palette.greyDark}`,
    },
  },
  divider: {
    width: '16%',
    margin: '3px 0 10px 0',
  },
}));

const Offer = ({ heading, description, img }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={img}
        alt=""
        style={{ width: '10%', padding: '2%', maxHeight: '48px' }}
      />
      <h6
        style={{
          margin: '18px 0px',
          'font-size': '1rem',
          fontWeight: 100,
        }}
      >
        {heading}
      </h6>
      <Divider className={classes.divider} />

      <p
        style={{
          'text-align': 'center',
          padding: '2%',
          margin: 0,
          color: '#6f6f6f',
        }}
      >
        {description}
      </p>
    </div>
  );
};
export { Offer };
