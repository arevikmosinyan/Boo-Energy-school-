import { Typography } from '@material-ui/core';
import React from 'react';
import { IQTests_ROUTE } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import image1 from '../../images/HomePagePicture1.png';
import SuggestedCoursesCarousel from './SuggestedCoursesCarousel.js';
import HowToUse from './HowToUse';
import LearnAnyTime from './LearnAnyTime';
import PopularCourses from './PopularCourses';
import AboutCoursesSection from './AboutCoursesSection';
import OurPlatform from './OurPlatform';

const Home = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  return (
    <>
      <div
        className={`${classes.IQTestsDivOfHomePage} ${classesForMediaQueries.IQTestsDivOfHomePage}`}>
        <div className={classes.wrapperOfTypographyAndIQTestButton}>
          <Typography
            className={`${classes.typographyStyle} ${classesForMediaQueries.typographyStyle}`}>
            Այստեղ դու կգտնես ցանկացած <br />
            ոլորտ որով հետաքրքրված ես,
            <br /> բայց սկզբի համար․․․
          </Typography>
          <NavLink
            to={IQTests_ROUTE}
            activeClassName={classes.activeLinkStyle}
            className={classes.navLinkStyle}>
            <Button
              variant='outlined'
              className={`${classes.IQTestsButton} ${classesForMediaQueries.IQTestsButton}`}>
              Անցնենք IQ թեստը
            </Button>
          </NavLink>
        </div>

        <div className={classes.ImageOfIQTestsDivOfHomePage}>
          <img src={image1} alt='hire' className={classes.Image} />
        </div>
      </div>
      <SuggestedCoursesCarousel />
      <HowToUse />
      {/* <LearnAnyTime /> */}
      <OurPlatform />
      <PopularCourses />
      <AboutCoursesSection />
    </>
  );
};

export default Home;
/*-----------------------------------------------------Styles--------------------------------*/

const useStyles = makeStyles({
  IQTestsDivOfHomePage: {
    height: 500,
    backgroundColor: colors.lightGreen,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0px 16px',
    margin: '0px auto',
    flexWrap: 'wrap',
  },
  wrapperOfTypographyAndIQTestButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  typographyStyle: {
    color: colors.white,
    fontFamily: fonts.dejavu,
    fontSize: 45,
    lineHeight: 1,
    maxWidth: 821,
    height: 183,
  },
  IQTestsButton: {
    color: colors.white,
    backgroundColor: colors.darkGreen,
    textTransform: 'capitalize',
  },
  ImageOfIQTestsDivOfHomePage: {
    height: 300,
  },
  Image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 20,
  },
});
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    IQTestsDivOfHomePage: {
      flexDirection: 'column',
    },
    wrapperOfTypographyAndIQTestButton: {
      flexDirection: 'column',
    },
    typographyStyle: {
      fontSize: 20,
      lineHeight: 1,
      maxWidth: 321,
      height: 83,
      paddingTop: 20,
    },
    IQTestsButton: {
      margin: 20,
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    IQTestsDivOfHomePage: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapperOfTypographyAndIQTestButton: {
      marginLeft: 35,
    },
    typographyStyle: {
      fontSize: 25,
      maxWidth: 421,
      height: 90,
      marginTop: 25,
      paddingRight: 20,
      marginBottom: 25,
    },

    ImageOfIQTestsDivOfHomePage: {
      marginRight: 50,
      height: '50%',
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    IQTestsDivOfHomePage: {
      height: 400,
      backgroundColor: colors.lightGreen,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapperOfTypographyAndIQTestButton: {
      marginLeft: 35,
    },
    typographyStyle: {
      color: colors.white,
      fontFamily: fonts.dejavu,
      fontSize: 33,
      lineHeight: 1,
      // width: 521,
      maxWidth: 521,
      height: 120,
      paddingRight: 20,
    },

    ImageOfIQTestsDivOfHomePage: {
      marginRight: 50,
      width: 322,
      height: 200,
    },
    Image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 20,
    },
  },
});
