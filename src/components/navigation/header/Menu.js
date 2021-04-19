import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Divider } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    // color: theme.palette.primary.main,
    width: '100%',
    padding: '10px',
  },
  btn: {
    color: theme.palette.DavyGrey,
    '&:hover': {
      color: theme.palette.primary.main,
      background: theme.palette.primary.light,
    },
  },
  itmes: {
    padding: '10px !important',
    '&:hover': {
      background: theme.palette.primary.light,
      fontWeight: '400',
    },
  },
  divider: {
    width: '100%',
    margin: '3px 0',
  },
}));

export default function MenuListComposition({ name = 'EVENTS' }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const name2 = (
    <span style={{ position: 'relative' }}>
      {name}
      <ArrowDropDownIcon style={{ position: 'absolute' }} />
    </span>
  );

  return (
    <div className={classes.root} style={{ padding: '0 2%' }}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.btn}
        >
          {name2}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ zIndex: '1005' }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose} className={classes.itmes}>
                      Profile
                    </MenuItem>
                    <Divider className={classes.divider} />
                    <MenuItem onClick={handleClose} className={classes.itmes}>
                      My account
                    </MenuItem>
                    <Divider className={classes.divider} />
                    <MenuItem onClick={handleClose} className={classes.itmes}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
