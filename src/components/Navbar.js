import * as React from 'react';
import { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Button } from '@material-ui/core';
import {
  HOME_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from '../constants/routes';
import { colors, fonts } from '../constants/variables';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import MenuButtonComponent from './MenuButtonComponent';
import MenuForCoursesAndTests from './MenuForCoursesAndTests';

function NavBar() {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <AppBar position='static' className={classes.appBarStyle}>
      <Toolbar className={classes.toolbarStyle}>
        <MenuButtonComponent />

        <div
          className={`${classes.containerOfLogo} ${classesForMediaQueries.containerOfLogo}`}>
          <Logo className={classes.logoStyle} />
        </div>

        <div className={classes.containerOfNavLinks}>
          <NavLink
            exact
            to={HOME_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Գլխավոր
          </NavLink>

          <NavLink
            onClick={handleClick1}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Դասընթացներ
          </NavLink>
          <MenuForCoursesAndTests
            anchorEl={anchorEl1}
            isCourses={Boolean(anchorEl1)}
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          />

          <NavLink
            onClick={handleClick2}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Թեստեր
          </NavLink>
          <MenuForCoursesAndTests
            anchorEl={anchorEl2}
            isQuizzes={Boolean(anchorEl2)}
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
          />
          <NavLink
            to={RATING_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Վարկանիշ
          </NavLink>
          <NavLink
            to={COMMUNITY_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Համայնք
          </NavLink>
          <NavLink
            to={CALENDAR_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Օրացույց
          </NavLink>
          <NavLink
            to={ABOUT_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Մեր մասին
          </NavLink>
        </div>
        <div className={classes.containerOfSigninAndSignup}>
          <NavLink to={SIGNIN_ROUTE} className={classes.navLinkStyle}>
            <Button variant='outlined' className={classes.buttonSignIn}>
              Մուտք
            </Button>
          </NavLink>
          <NavLink to={SIGNUP_ROUTE} className={classes.navLinkStyle}>
            <Button variant='outlined' className={classes.buttonSignUp}>
              Գրանցում
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;

/*----------------------------------Styles--------------------------------*/
const useStyles = makeStyles({
  containerOfLogo: {
    marginTop: 15,
  },
  appBarStyle: {
    backgroundColor: colors.darkGreen,
  },
  toolbarStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: 0,
    paddingRight: 0,
  },
  containerOfNavLinks: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  navLinkStyle: {
    color: colors.white,
    fontFamily: fonts.armenian,
    textDecoration: 'none',
    fontStyle: 'normal',
    height: 24,
    fontWeight: 400,
    fontSize: 18,
    margin: 10,
    '&:focus': {
      color: colors.yellow,
      fontWeight: 'bold',
    },
  },
  containerOfSigninAndSignup: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  buttonSignIn: {
    color: colors.white,
    borderRadius: 10,
    backgroundColor: colors.lightGreen,
    '&:hover': {
      color: colors.white,
    },
  },

  buttonSignUp: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
  },
});

/*----------------------------------------------media queries---------------------------------------------*/

const mediaQueries = makeStyles({
  '@media  (max-width:600px)': {
    navLinkStyle: {
      display: 'none',
    },
  },
  '@media (min-width: 601px) and (max-width:992px)': {
    navLinkStyle: {
      display: 'none',
    },
  },
  '@media (min-width: 993px) and (max-width:1200px)': {
    navLinkStyle: {
      color: colors.white,
      fontFamily: fonts.armenian,
      textDecoration: 'none',
      fontStyle: 'normal',
      height: 18,
      fontWeight: 400,
      fontSize: 14,
      margin: 10,
      '&:focus': {
        color: colors.yellow,
        fontWeight: 'bold',
      },
    },
  },
});
