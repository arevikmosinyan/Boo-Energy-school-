import React from 'react';
import { useState } from 'react';
import { colors, fonts } from '../constants/variables';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import {
  HOME_ROUTE,
  QUIZZES_ROUTE,
  COURSES_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
} from '../constants/routes';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const MenuButtonComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        handleClose();
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [anchorEl]);

  return (
    <div>
      <IconButton
        edge='start'
        className={`${classes.menuButton} ${classesForMediaQueries.menuButton}`}
        color='inherit'
        aria-label='menu'
        onClick={handleClick}>
        <MenuIcon
          className={`${classes.menuIcon} ${classesForMediaQueries.menuIcon}`}
        />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              exact
              to={HOME_ROUTE}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Գլխավոր
            </NavLink>
          </MenuItem>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              to={COURSES_ROUTE}
              activeClassName={classes.activeLinkStyle}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Դասընթացներ
            </NavLink>
          </MenuItem>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              to={QUIZZES_ROUTE}
              activeClassName={classes.activeLinkStyle}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Թեստեր
            </NavLink>
          </MenuItem>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              to={RATING_ROUTE}
              activeClassName={classes.activeLinkStyle}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Վարկանիշ
            </NavLink>
          </MenuItem>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              to={COMMUNITY_ROUTE}
              activeClassName={classes.activeLinkStyle}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Համայնք
            </NavLink>
          </MenuItem>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              to={CALENDAR_ROUTE}
              activeClassName={classes.activeLinkStyle}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Օրացույց
            </NavLink>
          </MenuItem>
          <MenuItem className={classesForMediaQueries.menuItemStyle}>
            <NavLink
              to={ABOUT_ROUTE}
              activeClassName={classes.activeLinkStyle}
              className={`${classes.menueItemNavLinkStyle} ${classesForMediaQueries.menueItemNavLinkStyle}`}>
              Մեր մասին
            </NavLink>
          </MenuItem>
        </Menu>
      </IconButton>
    </div>
  );
};

export default MenuButtonComponent;
/*----------------------------------Styles--------------------------------*/
const useStyles = makeStyles({});

/*--------------------------------------------media quieries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media  (max-width:600px)': {
    menuButton: {
      display: 'inline-block',
      width: 60,
      height: 60,
      marginLeft: 20,
    },
    menuIcon: {
      width: '100%',
      height: '100%',
    },
    menuItemStyle: {
      border: `2px solid ${colors.darkGreen}`,
      borderRadius: 10,
      margin: 5,
    },
    menueItemNavLinkStyle: {
      color: colors.darkGreen,

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
  },
  '@media (min-width: 601px) and (max-width:992px)': {
    menuButton: {
      display: 'inline-block',
      width: 70,
      height: 70,
      marginLeft: 20,
    },
    menuIcon: {
      width: '100%',
      height: '100%',
    },
    menuItemStyle: {
      border: `2px solid ${colors.darkGreen}`,
      borderRadius: 10,
      margin: 5,
    },
    menueItemNavLinkStyle: {
      color: colors.darkGreen,
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
  },
  '@media (min-width: 993px) and (max-width:1200px)': {
    menuButton: {
      display: 'none',
    },
  },
  '@media (min-width: 1201px)': {
    menuButton: {
      display: 'none',
    },
  },
});
