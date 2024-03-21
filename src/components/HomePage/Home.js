import { Typography } from '@material-ui/core';
import React from 'react';
import { IQTests_ROUTE } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import image1 from '../../images/HomePagePicture1.png';
import SuggestedCoursesCarousel from './SuggestedCoursesCarousel.js';
import HowToUse from './HowToUse';
// import LearnAnyTime from './LearnAnyTime';
import PopularCourses from './PopularCourses';
import AboutCoursesSection from './AboutCoursesSection';
import OurPlatform from './OurPlatform';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`${classes.IQTestsDivOfHomePage} ${classesForMediaQueries.IQTestsDivOfHomePage}`}>
        <div
          className={classes.wrapperOfTypographyAndIQTestButton}
          style={{ alignItems: window.innerWidth < 600 && 'center' }}>
          <Typography
            className={`${classes.typographyStyle} ${classesForMediaQueries.typographyStyle}`}>
            {t('homePageTypographyText1')}
          </Typography>
          <NavLink
            to={IQTests_ROUTE}
            activeClassName={classes.activeLinkStyle}
            className={classes.navLinkStyle}>
            <Button
              variant='outlined'
              className={`${classes.IQTestsButton} ${classesForMediaQueries.IQTestsButton}`}>
              {t('homePageIQTestButton')}
            </Button>
          </NavLink>
        </div>

        <div
          className={classes.ImageOfIQTestsDivOfHomePage}
          style={{ height: window.innerWidth <= 600 && '40%' }}>
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
    maxWidth: 721,
  },
  IQTestsButton: {
    color: colors.white,
    backgroundColor: colors.darkGreen,
    marginTop: 15,
  },
  ImageOfIQTestsDivOfHomePage: {
    height: '80%',
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
      height: 'auto',
    },
    wrapperOfTypographyAndIQTestButton: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    typographyStyle: {
      fontSize: '1.5rem',
      lineHeight: 1,
      maxWidth: '80%',
      paddingTop: 20,
      margin: '20px 0',
      textAlign: 'center',
    },
    IQTestsButton: {
      margin: 20,
    },
    ImageOfIQTestsDivOfHomePage: {
      height: 'auto',
      width: '100%',
      margin: '20px 0',
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    IQTestsDivOfHomePage: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 250,
    },
    wrapperOfTypographyAndIQTestButton: {
      marginLeft: 35,
    },
    typographyStyle: {
      fontSize: 25,
      maxWidth: 421,
      marginTop: 25,
      paddingRight: 20,
      marginBottom: 25,
    },

    ImageOfIQTestsDivOfHomePage: {
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
      maxWidth: 521,
      paddingRight: 20,
    },

    ImageOfIQTestsDivOfHomePage: {
      marginRight: 50,
      width: '50%',
      height: 200,
    },
  },
});
