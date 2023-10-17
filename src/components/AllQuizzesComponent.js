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
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Paper
        className={classes.paper}
        style={{
          backgroundImage: `url(${allQuizzesComponentBackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

          width: '80%',
          height: '90%',

          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          marginTop: 40,
          marginBottom: 40,
          borderRadius: 30,
        }}>
        {/* <img
        src={allQuizzesComponentBackgroundImage}
        alt='all courses'
        className={classes.image}
      /> */}

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
            <NavLink
              exact
              to={GRAPHICDESIGN_ROUTE}
              className={classes.menuItem}>
              {t('graphicDesign')}
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink exact to={UIUXDESIGN_ROUTE} className={classes.menuItem}>
              {t('UX/UI')}
            </NavLink>
          </MenuItem>
        </div>
      </Paper>
    </div>
  );
};

export default AllQuizzesComponent;

/*-------------------------------------------------Styes-------------------------------*/

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
    padding: 10,
    width: '80%',
    height: '80%',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  coursesWrapper: {
    position: 'absolute',
    // top: 50,
    // left: '6%',
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
    '&:hover': {
      color: 'black',
    },
  },
});
