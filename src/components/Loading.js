import React from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { colors } from '../constants/variables';

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>Խնդրում ենք սպասել, Ձեր տվյալները մշակման փուլում են․․․</p>

      <Backdrop className={classes.backdrop} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
}
/*------------------------------------------Styles-----------------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  container: {
    margin: 50,
    marginTop: 80,
    borderRadius: 15,
    border: `2px solid ${colors.darkGreen}`,
    padding: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
