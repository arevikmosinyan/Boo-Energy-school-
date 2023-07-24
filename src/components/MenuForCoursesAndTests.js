import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {
  MATHEMATICSCOURSE_ROUTE,
  MATHEMATICSQUIZZES_ROUTE,
  ENGLISH_ROUTE,
  GRAPHICDESIGN_ROUTE,
  PROGRAMMING_ROUTE,
  UIUXDESIGN_ROUTE,
} from '../constants/routes';
import { colors, fonts } from '../constants/variables';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import { menuListOfSubjects } from './Categories';

function MenuForCoursesAndTests(props) {
  const classes = useStyles();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (props.isQuizzes) {
      setRoute(MATHEMATICSQUIZZES_ROUTE);
    }
    if (props.isCourses) {
      setRoute(MATHEMATICSCOURSE_ROUTE);
    }
  }, [props.isQuizzes, props.isCourses]);

  function handleMenuItemClick() {
    if (route) {
      props.onClose();
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Menu
          className={classes.wrapperOfMenuForCoursesAndTests}
          id='simple-menu'
          anchorEl={props.anchorEl}
          keepMounted
          open={props.open}
          onClose={props.onClose}>
          {/* {menuListOfSubjects.map((subject) => {
            return (
              <MenuItem onClick={props.onClose}>
                <NavLink exact to={subject.routeOfSubject} className={classes.menuItem}>
                  {subject.nameOfSubject}
                </NavLink>
              </MenuItem>
            );
          })} */}
          <MenuItem onClick={handleMenuItemClick}>
            <NavLink to={route} className={classes.menuItem}>
              Մաթեմատիկա
            </NavLink>
          </MenuItem>
          <MenuItem onClick={props.onClose}>
            <NavLink exact to={ENGLISH_ROUTE} className={classes.menuItem}>
              Անգլերեն
            </NavLink>
          </MenuItem>
          <MenuItem onClick={props.onClose}>
            <NavLink exact to={PROGRAMMING_ROUTE} className={classes.menuItem}>
              Ծրագրավորում
            </NavLink>
          </MenuItem>
          <MenuItem onClick={props.onClose}>
            <NavLink
              exact
              to={GRAPHICDESIGN_ROUTE}
              className={classes.menuItem}>
              Գրաֆիկ դիզայն
            </NavLink>
          </MenuItem>
          <MenuItem onClick={props.onClose}>
            <NavLink exact to={UIUXDESIGN_ROUTE} className={classes.menuItem}>
              UI/UX դիզայն
            </NavLink>
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
}

export default MenuForCoursesAndTests;
/*----------------------------------------------Styles------------------------------------------------------*/
const useStyles = makeStyles((theme) => ({
  wrapperOfMenuForCoursesAndTests: {
    marginTop: 30,
  },
  menuItem: {
    textDecoration: 'none',
    color: colors.white,
    fontFamily: fonts.armenian,
  },
}));

const theme = createTheme({
  overrides: {
    MuiPopover: {
      paper: {
        backgroundColor: colors.veryLightGreen,
      },
    },
  },
});
