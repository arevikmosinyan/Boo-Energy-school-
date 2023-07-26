import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import {
  HOME_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from '../constants/routes';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import userContext from '../contexts/userContext';
import { colors, fonts } from '../constants/variables';
import calendar from '../images/calendar.png';

const Calendar = () => {
  const classes = useStyles();
  const user = useContext(userContext);
  return (
    <>
      {!user && (
        <div className={classes.containerOfCalendarWithoutUser}>
          <div className={classes.calendarDivision}>
            <img
              src={calendar}
              alt='calendar'
              className={classes.calnedarImage}
            />
          </div>

          <div className={classes.wrapperOfSignUpAndSignInDivision}>
            Մեր օրացույցի օգնությամբ դուք կարող եք ստանալ հիշեցումներ Ձեր
            սահմանած ուսման ժամանակացույցի վերաբերյալ։ <br />
            Օրացույցից օգտվելու համար նախ պետք է գրացվել
            <div className={classes.wrapperOfSignUpAndSignInButton}>
              <NavLink to={SIGNUP_ROUTE} className={classes.linkToSignUp}>
                Գրանցում
              </NavLink>
            </div>
            Եթե գրանցված օգտատեր եք, ապա՝
            <div className={classes.wrapperOfSignUpAndSignInButton}>
              <NavLink to={SIGNIN_ROUTE} className={classes.linkToSignIn}>
                Մուտք
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;
/*-----------------------------------------------------Styles--------------------------------*/

const useStyles = makeStyles({
  containerOfCalendarWithoutUser: {
    width: '70%',
    height: '100%',
    display: 'flex',

    margin: 'auto',
    marginTop: 30,
    marginBottom: 30,
  },
  calendarDivision: {
    flex: 1,
    backgroundColor: colors.veryVeryLightGreen,
  },
  wrapperOfSignUpAndSignInDivision: {
    flex: 1,
    color: colors.darkGreen,
    fontFamily: fonts.armenian,
    padding: 30,
    lineHeight: 2,
    textAlign: 'center',
  },
  calnedarImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  wrapperOfSignUpAndSignInButton: {
    padding: 20,
  },
  linkToSignIn: {
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.yellow,
    fontSize: 25,
  },

  linkToSignUp: {
    paddingLeft: 10,
    color: colors.yellow,
    fontSize: 25,
  },
});
