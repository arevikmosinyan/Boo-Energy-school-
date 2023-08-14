import React from 'react';
import { makeStyles, MenuItem, Menu } from '@material-ui/core';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuForCoursesAndTests from '../MenuForCoursesAndTests';
import {
  ENGLISH_ROUTE,
  PROGRAMMING_ROUTE,
  GRAPHICDESIGN_ROUTE,
  UIUXDESIGN_ROUTE,
  MATHEMATICSCOURSE_ROUTE,
} from '../../constants/routes';
import { colors } from '../../constants/variables';

const Courses = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>
        Այստեղ կգտնեք ներքոնշյան առարկաների վերաբերյալ տարաբնույթ դասընթացներ
      </h1>
      <div
        className={classes.wrapperOfMenuForCoursesAndTests}
        id='simple-menu'
        //   anchorEl={anchorEl}
        //   keepMounted
        //   open={open}
        //   onClose={onClose}>
      >
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

export default Courses;

/*-------------------------------------------------Styes-------------------------------*/

const useStyles = makeStyles({
  container: {
    margin: 25,
    backgroundColor: colors.lightGreen,
    height: '100vh',
  },

  wrapperOfMenuForCoursesAndTests: {
    width: '100%',
    height: '100%',
  },
});
