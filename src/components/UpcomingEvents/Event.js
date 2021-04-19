import { Backdrop, Button, Divider, makeStyles } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  eventpic: {
    width: '30%',
    height: '400px',
    'background-size': 'cover',
  },
  divider: {
    width: '60%',
    background: theme.palette.primary.main,
    height: '2px',
  },
  backdrop: {
    opacity: '0.6 !important',
    zIndex: 1000,
    position: 'absolute',
    '&:hover': {
      opacity: '0.97 !important',
    },
  },
  allignSelf: {
    textAlign: 'center',
    'align-self': 'center',
  },
  butonStyle: {
    width: '50%',
  },
}));
function Event({ backgroudImage, heading, date }) {
  const classes = useStyles();
  //   const [show, setShow] = useState(false);
  return (
    <div
      className={classes.eventpic}
      style={{
        background: `url(${backgroudImage}) no-repeat center center `,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <Backdrop
        className={classes.backdrop}
        open={true}
        // onMouseEnter={() => {
        //   if (!show) {
        //     setShow(true);
        //   }
        // }}
        // onMouseOut={() => {
        //   if (show) {
        //     setShow(false);
        //   }
        // }}
      >
        <div
          style={{
            border: '2px solid white',
            height: '90%',
            width: '90%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
          }}
        >
          <div
            style={{
              color: 'white',
              'z-index': 2000,
              width: '74%',
              display: 'flex',
              'flex-direction': 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: '50%',
            }}
          >
            <h2>{heading}</h2>
            <Divider className={classes.divider} />
            <p>{date}</p>
            <Button
              color="primary"
              variant="contained"
              className={classes.butonStyle}
              // style={{ display: show ? 'block' : 'none' }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}
export { Event };
