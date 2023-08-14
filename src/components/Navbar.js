import * as React from 'react';
import { useState, useContext } from 'react';
import { makeStyles, AppBar, Toolbar, Button } from '@material-ui/core';
import {
  HOME_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  COURSES_ROUTE,
  PROFILE_ROUTE,
} from '../constants/routes';
import { colors, fonts } from '../constants/variables';
import Logo from './Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuButtonComponent from './MenuButtonComponent';
import MenuForCoursesAndTests from './MenuForCoursesAndTests';
import userContext from '../contexts/userContext';
import { signOut } from 'firebase/auth';
import { auth } from '../requests/firebase';
import userDataContext from '../contexts/userDataContext';
import avatar from '../images/avatar.png';

function NavBar() {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const user = useContext(userContext);
  const userData = useContext(userDataContext);
  const navigate = useNavigate();

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
    setTimeout(() => {
      navigate(COURSES_ROUTE);
    }, 100);
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

  async function logout() {
    await signOut(auth);
  }

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
          {/* <NavLink
            to={COMMUNITY_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Համայնք
          </NavLink> */}
          {/* <NavLink
            to={CALENDAR_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Օրացույց
          </NavLink> */}
          <NavLink
            to={ABOUT_ROUTE}
            className={`${classes.navLinkStyle} ${classesForMediaQueries.navLinkStyle}`}>
            Մեր մասին
          </NavLink>
        </div>

        {user ? (
          <div className={classes.containerOfSigninAndSignup}>
            <NavLink to={HOME_ROUTE} className={classes.navLinkStyleLogout}>
              <Button
                variant='outlined'
                className={classes.buttonSignIn}
                onClick={logout}>
                Ելք
              </Button>
            </NavLink>
            <div
              className={classes.wrappperOfLinkToProfile}
              onClick={() => navigate(PROFILE_ROUTE)}>
              <div className={classes.userLink}>{userData?.name}</div>
              <div className={classes.wrapperOfAvatarImage}>
                <img src={avatar} alt='avatar' className={classes.avatar} />
              </div>
            </div>
          </div>
        ) : (
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
        )}
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
  wrappperOfLinkToProfile: {
    display: 'flex',
    border: `2px solid ${colors.yellow}`,
    borderRadius: 10,
    alignItems: 'center',
    cursor: 'pointer',
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
    alignItems: 'center',
  },
  avatar: {
    width: '70%',
  },
  wrapperOfAvatarImage: {
    width: 60,
    height: 30,
  },
  navLinkStyleLogout: {
    margin: 15,
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

  userLink: {
    color: colors.yellow,
    padding: 15,
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
