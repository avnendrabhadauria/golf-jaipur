import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

function MediaControlCard({ childComponent, addressDetails }) {
  return (
    <div style={{ padding: '10px', display: 'flex', color: '#b7b7b7' }}>
      <div style={{ padding: '10px' }}>{childComponent}</div>
      <address style={{ padding: '10px', color: '#6f6f6f' }}>
        {addressDetails}
      </address>
    </div>
  );
}

export default function Address(props) {
  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <MediaControlCard
        childComponent={<PhoneIcon />}
        addressDetails="1-800-1234-567"
      />
      <MediaControlCard
        childComponent={<LocationOnIcon />}
        addressDetails="SBh Road, Near Lal Bagh, Jaipur"
      />
    </div>
  );
}
