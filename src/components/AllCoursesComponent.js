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
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <img
        src={allCorsesBackgroundImage}
        alt='all courses'
        className={classes.image}
      />

      <div className={classes.coursesWrapper}>
        <MenuItem>
          <NavLink
            exact
            to={MATHEMATICSCOURSE_ROUTE}
            className={classes.menuItem}>
            {t('mathematics')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={ENGLISH_ROUTE} className={classes.menuItem}>
            {t('english')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={PROGRAMMING_ROUTE} className={classes.menuItem}>
            {t('programming')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={GRAPHICDESIGN_ROUTE} className={classes.menuItem}>
            {t('graphicDesign')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={UIUXDESIGN_ROUTE} className={classes.menuItem}>
            {t('UX/UI')}
          </NavLink>
        </MenuItem>
      </div>
    </div>
  );
};

export default Courses;

/*-------------------------------------------------Styes-------------------------------*/

const useStyles = makeStyles({
  container: {
    height: '100vh',
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  coursesWrapper: {
    position: 'absolute',
    top: 50,
    left: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '40%',
    borderRadius: 10,
  },
  menuItem: {
    margin: '10px 0px 10px 0px',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    padding: 10,
    width: '50%',
    color: 'rgba(0, 0, 0, 0.7)',
    textDecoration: 'none',
    borderRadius: 10,
    '&:hover': {
      color: 'black',
    },
  },
});
