import React from 'react';
import { makeStyles, MenuItem, Menu } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {
  ENGLISH_ROUTE,
  PROGRAMMING_ROUTE,
  GRAPHICDESIGN_ROUTE,
  UIUXDESIGN_ROUTE,
  MATHEMATICSCOURSE_ROUTE,
} from '../constants/routes';
import allCorsesBackgroundImage from '../images/AllCoursesComponentBackgroundImage.png';
import { useTranslation } from 'react-i18next';

const Courses = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <img
        src={allCorsesBackgroundImage}
        alt='all courses'
        className={`${classes.image} ${classesForMediaQueries.image}`}
      />

      <div
        className={`${classes.coursesWrapper} ${classesForMediaQueries.coursesWrapper}`}>
        <MenuItem>
          <NavLink
            exact
            to={MATHEMATICSCOURSE_ROUTE}
            className={`${classes.menuItem} ${classesForMediaQueries.menuItem}`}>
            {t('mathematics')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            exact
            to={ENGLISH_ROUTE}
            className={`${classes.menuItem} ${classesForMediaQueries.menuItem}`}>
            {t('english')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            exact
            to={PROGRAMMING_ROUTE}
            className={`${classes.menuItem} ${classesForMediaQueries.menuItem}`}>
            {t('programming')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            exact
            to={GRAPHICDESIGN_ROUTE}
            className={`${classes.menuItem} ${classesForMediaQueries.menuItem}`}>
            {t('graphicDesign')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            exact
            to={UIUXDESIGN_ROUTE}
            className={`${classes.menuItem} ${classesForMediaQueries.menuItem}`}>
            {t('UX/UI')}
          </NavLink>
        </MenuItem>
      </div>
    </div>
  );
};

export default Courses;

/*------------------------------------------------- Mobile-firstStyes-------------------------------*/

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  coursesWrapper: {
    position: 'absolute',
    top: '3%',
    left: '10%',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    width: '80%',
    borderRadius: 10,
  },
  menuItem: {
    margin: '3px 0px 3px 0px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 2,
    width: '90%',
    color: 'rgba(0, 0, 0, 0.7)',
    textDecoration: 'none',
    borderRadius: 5,
    fontSize: 'clamp(7px, 6vw, 15px)',
    fontWeight: 'bold',
    '&:hover': {
      color: 'black',
    },
  },
});
/*----------------------------------------------media queries---------------------------------------------*/

const mediaQueries = makeStyles({
  '@media (min-width:601px) and (max-width:992px)': {
    coursesWrapper: {
      top: '7%',
    },
    menuItem: {
      margin: '6px 0px 6px 0px',
      padding: 6,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    coursesWrapper: {
      top: '10%',
      // backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundColor: 'red',
      width: '50%',
      borderRadius: 8,
    },
    menuItem: {
      margin: '8px 0px 8px 0px',
      // backgroundColor: 'rgba(100, 100, 100, 0.5)',
      backgroundColor: 'blue',
      padding: 7,
      width: '50%',
      borderRadius: 10,
    },
  },
  '@media (min-width:1201px)': {
    coursesWrapper: {
      top: '20%',
      //backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: '40%',
      borderRadius: 10,
    },
    menuItem: {
      margin: '10px 0px 10px 0px',
      //backgroundColor: 'rgba(100, 100, 100, 0.5)',
      padding: 10,
      width: '40%',
    },
  },
});
