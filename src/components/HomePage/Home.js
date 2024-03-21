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
          className={`${classes.wrapperOfTypographyAndIQTestButton} ${classesForMediaQueries.wrapperOfTypographyAndIQTestButton}`}>
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
          className={`${classes.ImageOfIQTestsDivOfHomePage} ${classesForMediaQueries.ImageOfIQTestsDivOfHomePage}`}>
          <img
            src={image1}
            alt='hire'
            className={`${classes.Image} ${classesForMediaQueries.Image}`}
          />
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

/*-----------------------------------------------------Mobile-firstStyles--------------------------------*/

const useStyles = makeStyles({
  IQTestsDivOfHomePage: {
    backgroundColor: colors.lightGreen,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0px 16px',
    margin: '0px auto',
    flexDirection: 'column',
    height: 'auto',
  },
  wrapperOfTypographyAndIQTestButton: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  typographyStyle: {
    color: colors.white,
    fontFamily: fonts.dejavu,
    fontSize: '1.5rem',
    lineHeight: 1,
    maxWidth: '80%',
    textAlign: 'center',
    paddingTop: 20,
    margin: '20px 0',
  },
  IQTestsButton: {
    color: colors.white,
    backgroundColor: colors.darkGreen,
    marginTop: 15,
    margin: 20,
  },
  ImageOfIQTestsDivOfHomePage: {
    height: 'auto',
    width: '100%',
    flex: 1,
  },
  Image: {
    maxWidth: '80%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 20,
    margin: 50,
  },
});
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (min-width:601px) and (max-width:992px)': {
    IQTestsDivOfHomePage: {
      flexDirection: 'row',
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
  '@media (min-width:993px) ': {
    IQTestsDivOfHomePage: {
      flexDirection: 'row',
      backgroundColor: colors.lightGreen,
      justifyContent: 'center',
    },
    wrapperOfTypographyAndIQTestButton: {
      marginLeft: 35,
      marginRight: 15,
      flex: 1,
    },
    typographyStyle: {
      color: colors.white,
      fontFamily: fonts.dejavu,
      fontSize: 33,
      maxWidth: 521,
      lineHeight: 1,
      paddingRight: 20,
    },
    ImageOfIQTestsDivOfHomePage: {
      width: '100%',
      flex: 1,
      height: 'auto',
    },
    Image: {
      width: '70%',
    },
  },
});
