import React from 'react';
import illustrationCalendar from '../../images/IllustrationCalendar.png';
import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';

const LearnAnyTime = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  return (
    <div>
      <p
        className={`${classes.learnAnyTimeText} ${classesForMediaQueries.learnAnyTimeText}`}>
        Սովորի՛ր քեզ հարմար պահին
      </p>
      <div
        className={`${classes.learnAnyTime} ${classesForMediaQueries.learnAnyTime}`}>
        <img
          src={illustrationCalendar}
          alt='illustration'
          className={`${classes.illustrationCalendarStyle} ${classesForMediaQueries.illustrationCalendarStyle}`}
        />
        <p
          className={`${classes.calendarText} ${classesForMediaQueries.calendarText}`}>
          Որոշի՛ր և նշի՛ր սովորելու համար նախընտրելի ժամերն ու օրերը օրացույցի
          վրա, կազմի՛ր քո գրաֆիկը, շարժվի՛ր քո արագությամբ․ դու ազատ ես քո
          ընտրության մեջ
        </p>
      </div>
    </div>
  );
};

export default LearnAnyTime;

/*----------------------------------------------------Styles--------------------------------------*/
const useStyles = makeStyles({
  illustration: {
    width: 539,
    height: 335,
  },
  learnAnyTimeText: {
    textAlign: 'center',
    color: colors.darkGreen,
    fontSize: 60,
    fontFamily: fonts.armenian,
    fontWeight: 600,
    margin: 100,
  },
  learnAnyTime: {
    maxWidth: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 50px',
  },
  illustrationCalendarStyle: {
    width: '60%',
    padding: '46.167px 75.874px 30.912px 60.888px',
  },
  calendarText: {
    width: '40%',
    color: colors.lightGreen,
    fontSize: 50,
    fontFamily: fonts.armenian,
  },
});

/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width:600px)': {
    learnAnyTimeText: {
      fontSize: 30,
      fontWeight: 600,
      margin: 50,
    },
    illustrationCalendarStyle: {
      width: 291,
      height: 195,
      padding: '16px 25px 30px 20px',
    },
    calendarText: {
      fontSize: 30,
      width: 414,
      height: 219,
    },
    learnAnyTime: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    learnAnyTimeText: {
      fontSize: 30,
      fontWeight: 600,
      margin: 35,
    },
    illustrationCalendarStyle: {
      width: 280,
      height: 200,
      padding: '8px 0px 15px 10px',
    },
    calendarText: {
      fontSize: 20,
      width: 300,
      height: 150,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    learnAnyTime: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    learnAnyTimeText: {
      fontSize: 30,
      fontWeight: 600,
      margin: 35,
    },
    illustrationCalendarStyle: {
      width: 350,
      height: 250,
      padding: '8px 0px 15px 10px',
    },
    calendarText: {
      fontSize: 25,
      width: 400,
      height: 180,
    },
  },
});
