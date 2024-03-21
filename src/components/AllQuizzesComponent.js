import React from 'react';
import { makeStyles, MenuItem, Paper } from '@material-ui/core';
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
import { colors } from '../constants/variables';
import { useTranslation } from 'react-i18next';

const AllQuizzesComponent = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Paper className={`${classes.paper} ${classesForMediaQueries.paper}`}>
        <img
          src={allQuizzesComponentBackgroundImage}
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
      </Paper>
    </div>
  );
};

export default AllQuizzesComponent;

/*------------------------------------------------- Mobile-firstStyes-------------------------------*/

const useStyles = makeStyles({
  container: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(to right,rgba(128, 128, 128, 0.5), rgba(255, 222, 89, 0.5), rgba(128, 128, 128, 0.5))',
  },

  paper: {
    // width: '80%',
    // height: '70%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  coursesWrapper: {
    position: 'absolute',
    left: '6%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '50%',
    borderRadius: 10,
  },
  menuItem: {
    margin: '5px 0px 5px 0px',
    backgroundColor: 'rgba(100, 100, 100, 1)',
    padding: 5,
    width: '90%',
    color: colors.yellow,
    textDecoration: 'none',
    borderRadius: 10,
    fontSize: 'clamp(7px, 7vw, 18px)',
    '&:hover': {
      color: 'black',
    },
  },
});

/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (min-width:601px) and (max-width:992px)': {
    paper: {
      width: '80%',
      height: '80%',
      marginTop: 15,
      marginBottom: 15,
      borderRadius: 15,
    },
    image: {
      borderRadius: 15,
    },
    coursesWrapper: {
      left: '18%',
      width: '70%',
      borderRadius: 15,
    },
    menuItem: {
      margin: '8px 0px 8px 0px',
      padding: 8,
      width: '80%',
      borderRadius: 15,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    paper: {
      width: '50%',
      height: '50%',
      marginTop: 25,
      marginBottom: 25,
      borderRadius: 20,
    },
    image: {
      borderRadius: 25,
    },
    coursesWrapper: {
      left: '10%',
      width: '60%',
      borderRadius: 20,
    },
    menuItem: {
      margin: '12px 0px 12px 0px',
      padding: 15,
      width: '40%',
      borderRadius: 20,
    },
  },
  '@media (min-width:1201px) ': {
    paper: {
      width: '50%',
      margin: 0,
      borderRadius: 20,
    },
    image: {
      borderRadius: 20,
    },
    coursesWrapper: {
      left: '10%',
      width: '42%',
      borderRadius: 20,
    },
    menuItem: {
      margin: '15px 0px 15px 0px',
      padding: 25,
      borderRadius: 20,
    },
  },
});
