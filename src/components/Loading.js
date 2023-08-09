import React from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      Խնդրում ենք սպասել, Ձեր տվյալները մշակման փուլում են․․․
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
  text: {
    margin: 20,
  },
}));
