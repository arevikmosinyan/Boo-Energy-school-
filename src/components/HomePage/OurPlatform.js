import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import leftArrowWhite from '../../icons/Caret_Circle_Left_white.png';
import rightArrowWhite from '../../icons/Caret_Circle_Right_white.png';
import { ourPlatformImages } from './OurPlatformImages.js';
import workersImageOfHomePage from '../../images/two-attractive-female-friends-working-laptop-restaurant.png';
import zIndex from '@material-ui/core/styles/zIndex';

const OurPlatform = () => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  return (
    <div>
      <p
        className={`${classes.ourPlatformHeader} ${classesForMediaQueries.ourPlatformHeader}`}>
        Մեր հարթակը
      </p>
      <div
        className={`${classes.ourPlatform} ${classesForMediaQueries.ourPlatform}`}>
        <img
          src={workersImageOfHomePage}
          className={`${classes.workersImage} ${classesForMediaQueries.workersImage}`}
          alt='workersImage'
        />

        <div
          className={classes.arrowWhiteDivStyle}
          onClick={() => {
            console.log('render');

            index > 0 && setIndex(index - 1);
          }}>
          <img
            src={leftArrowWhite}
            alt='left'
            className={`${classes.arrow} ${classesForMediaQueries.arrow}`}
          />
        </div>

        <p
          className={`${classes.ourPlatformText} ${classesForMediaQueries.ourPlatformText}`}>
          Շատ մարդիկ լրացնում են իրենց գիտելիքների պաշարը, բացահայտում նոր
          ոլորտներ, համեմատում իրենց վարկանիշը և հաղորդակցվում իրար հետ այս
          ինտելեկտուալ հարթակում
        </p>
        <div
          className={`${classes.arrowWhiteDivStyle} ${classesForMediaQueries.arrowWhiteDivStyle}`}
          onClick={() => {
            console.log('render');
            index < ourPlatformImages.length - 1 && setIndex(index + 1);
          }}>
          <img
            src={rightArrowWhite}
            alt='right'
            className={`${classes.arrow} ${classesForMediaQueries.arrow}`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPlatform;

/*--------------------------------------Styles----------------------------------*/

const useStyles = makeStyles({
  ourPlatformHeader: {
    textAlign: 'center',
    fontSize: 60,
    fontFamily: fonts.armenian,
    fontWeight: 600,
    color: colors.darkGreen,
    margin: 100,
    marginTop: 150,
    paddingBottom: 150,
  },
  ourPlatform: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    marginTop: 350,
  },
  workersImage: {
    objectFit: 'contain',
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  arrowWhiteDivStyle: {
    alignSelf: 'center',
  },
  arrow: {
    width: 70,
    height: 70,
    color: colors.white,
    position: 'relative',
    zIndex: 1,
    bottom: 100,
  },
  ourPlatformText: {
    width: 1300,
    height: 150,
    textAlign: 'center',
    fontSize: 50,
    fontFamily: fonts.armenian,
    color: colors.white,
    paddingBottom: 300,
    opacity: 0.8,
  },
});
/*----------------------------------------media quieries-----------------------------------*/

const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    ourPlatformHeader: {
      //marginTop: 15,
      marginTop: 20,
      fontSize: 30,
      padding: '7vh',
    },
    ourPlatformText: {
      width: 500,
      height: 70,
      fontSize: 20,
      paddingBottom: 130,
    },
    ourPlatform: {
      //marginTop: 200,
      marginTop: 120,
    },
    arrow: {
      width: 35,
      height: 35,
      color: colors.white,
      bottom: 70,
    },
  },

  '@media (min-width:601px) and (max-width:992px)': {
    ourPlatformHeader: {
      // marginTop: 20,
      fontSize: 35,
      // paddingBottom: 30,
      marginTop: '15vh',
      paddingBottom: '5vh',
    },
    ourPlatformText: {
      width: 700,
      height: 100,
      fontSize: 20,
      // paddingBottom: 150,
      paddingBottom: 0,
      marginBottom: 20,
    },
    arrow: {
      width: 40,
      height: 40,
      color: colors.white,
      bottom: 100,
    },
    ourPlatform: {
      // marginTop: 280,
      marginTop: 280,
    },
  },

  '@media (min-width:993px) and (max-width:1200px)': {
    ourPlatformHeader: {
      marginTop: 20,
      fontSize: 45,
      paddingBottom: 20,
    },
    ourPlatformText: {
      width: 900,
      height: 140,
      fontSize: 35,
      paddingBottom: 200,
    },
    arrow: {
      width: 50,
      height: 50,
      bottom: 100,
    },
  },
});
