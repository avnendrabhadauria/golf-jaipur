import { Backdrop, Button, Grid, makeStyles } from '@material-ui/core';

import Address from './Address';
import AppBa from '../AppBar';
import React from 'react';
import backgroudImage from '../../../assests/images/backgroudImage.jpg';
import logo from '../../../assests/images/logo1.jpg';

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: '2%',
  },
  gridPAdpaddingding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  border: {
    width: '97%',
    margin: 'auto',
    borderBottom: `2px solid ${theme.palette.boxShadow}`,
    display: 'flex',
    justifyContent: 'space-between',
  },
  backgroundImg: {
    height: '650px',
    background: `#ffffff url(${backgroudImage}) no-repeat center center `,
    backgroundSize: 'cover',
    position: 'relative',
  },

  backdrop: {
    opacity: '0.8 !important',
    zIndex: 1000,
    position: 'absolute',
  },
  spanheader: {
    display: 'flex',
    'flex-direction': 'column',

    margin: '1% 0',
  },
}));
function Header(props) {
  const classes = useStyles();

  return (
    <header>
      <div>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            className={classes.gridPAdding}
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div className={classes.border}>
              <span className={classes.spanheader}>
                <img className={classes.padding} src={logo} alt="img" />
                <p style={{ margin: 0, color: '#6f6f6f' }}>
                  Service Before Self
                </p>
              </span>

              <Address />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.gridPAdding}
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <AppBa />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.gridPAdding}
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div className={classes.backgroundImg}>
              <Backdrop className={classes.backdrop} open={true}>
                <div
                  style={{
                    color: 'white',
                    'z-index': 2000,
                    width: '64%',
                    display: 'flex',
                    'flex-direction': 'column',

                    'align-items': 'center',
                  }}
                >
                  <h1
                    style={{
                      'font-size': '4em',

                      textTransform: 'uppercase',
                    }}
                  >
                    Welcome to Army Golf
                  </h1>
                  <p style={{ textAlign: 'center', lineHeight: '35px' }}>
                    Known as a sport of leisure and as a gentleman’s game, golf
                    is one of the most popular, well-received sports worldwide.
                    PLAY GOLF AT OUR CLUB is one of the area’s most renowned
                    golf clubs with a huge golf course, which is perfect for
                    both beginners and professional players. WELCOME TO ARMY
                    GOLF COURSE JAIPUR
                  </p>
                  <Button style={{ color: 'white', border: '2px solid white' }}>
                    Learn More
                  </Button>
                </div>
              </Backdrop>
            </div>
          </Grid>
        </Grid>
      </div>
    </header>
  );
}

export default Header;
