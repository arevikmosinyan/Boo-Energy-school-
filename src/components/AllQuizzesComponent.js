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
// import allQuizzesComponentBackgroundImage from '../images/AllQuizzesComponentBackgroundImage.jpg';
import allQuizzesComponentBackgroundImage from '../images/quiz.jpg';
import { colors, fonts } from '../constants/variables';

const AllQuizzesComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        src={allQuizzesComponentBackgroundImage}
        alt='all courses'
        className={classes.image}
      />

      <div className={classes.coursesWrapper}>
        <MenuItem>
          <NavLink
            exact
            to={MATHEMATICSCOURSE_ROUTE}
            className={classes.menuItem}>
            Մաթեմատիկա
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={ENGLISH_ROUTE} className={classes.menuItem}>
            Անգլերեն
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={PROGRAMMING_ROUTE} className={classes.menuItem}>
            Ծրագրավորում
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={GRAPHICDESIGN_ROUTE} className={classes.menuItem}>
            Գրաֆիկ դիզայն
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink exact to={UIUXDESIGN_ROUTE} className={classes.menuItem}>
            UI/UX դիզայն
          </NavLink>
        </MenuItem>
      </div>
    </div>
  );
};

export default AllQuizzesComponent;

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
    left: '6%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',

    width: '22%',
    borderRadius: 10,
  },
  menuItem: {
    margin: '10px 0px 10px 0px',
    backgroundColor: 'rgba(100, 100, 100, 1)',
    padding: 10,
    width: '90%',
    // color: 'rgba(0, 0, 0, 0.7)',
    color: colors.yellow,
    textDecoration: 'none',
    borderRadius: 10,
  },
});
