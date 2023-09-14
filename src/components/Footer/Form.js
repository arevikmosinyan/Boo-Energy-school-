import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../../constants/routes';
import { makeStyles, Button } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState('');
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const navigate = useNavigate();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function emailValidation() {
    const emailToTestForValidation = email.trim();
    if (
      !emailRegex.test(emailToTestForValidation) &&
      emailToTestForValidation?.length > 1
    ) {
      return 'Խնդրում ենք մուտքագրեք վավեր էլ․ հասցե ';
    }
  }
  return (
    <div className={`${classes.form} ${classesForMediaQueries.form}`}>
      <TextField
        className={classes.emailAddressFieldStyle}
        placeholder='Ձեր էլ․ փոստը'
        value={email.trim()}
        onChange={emailChange}
        fullWidth
        margin='normal'
        helperText={emailValidation()}
      />
      <div className={classes.containerOfSigninAndSignup}>
        <Button
          onClick={() =>
            navigate(SIGNIN_ROUTE, { state: { navigatedEmail: email.trim() } })
          }
          variant='outlined'
          className={classes.buttonSignIn}>
          Մուտք
        </Button>

        <Button
          onClick={() =>
            navigate(SIGNUP_ROUTE, { state: { navigatedEmail: email.trim() } })
          }
          variant='outlined'
          className={classes.buttonSignUp}>
          Գրանցում
        </Button>
      </div>
    </div>
  );
};

export default Form;
/*--------------------------------Styles-----------------------------*/
const useStyles = makeStyles({
  form: {
    width: 439,
    height: 162,
    display: 'flex',
    flexDirection: 'column',
  },
  emailAddressFieldStyle: {
    width: 439,
    background: colors.white,
    borderRadius: 10,
    color: colors.darkGreen,
    '& input': {
      height: '100%',
      borderRadius: 10,
    },
    '& input::placeholder': {
      color: colors.darkGreen,
    },
  },

  navLinkStyleForSignIn: {
    flex: 1,
    marginRight: 10,
    color: colors.white,
    fontFamily: fonts.armenian,
    textDecoration: 'none',
    fontStyle: 'normal',
    height: 24,
    fontWeight: 400,
    fontSize: 18,
  },
  navLinkStyleForSignUp: {
    flex: 1,
    marginLeft: 10,
    color: colors.white,
    fontFamily: fonts.armenian,
    textDecoration: 'none',
    fontStyle: 'normal',
    height: 24,
    fontWeight: 400,
    fontSize: 18,
  },
  containerOfSigninAndSignup: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonSignIn: {
    width: '100%',
    height: 48,
    color: colors.darkGreen,
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    '&:hover': {
      color: colors.white,
    },
  },
  buttonSignUp: {
    width: '100%',
    height: 48,
    color: colors.white,
    margin: 5,
    backgroundColor: colors.yellow,
    borderRadius: 10,
  },
});
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (max-width: 600px)': {
    form: {
      width: 300,
      height: 100,
      marginBottom: 50,
      marginTop: 30,
    },
  },
  '@media (min-width:601px) and (max-width:992px)': {
    form: {
      width: 350,
      height: 120,
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 80,
      marginTop: 50,
    },
  },
  '@media (min-width:993px) and (max-width:1200px)': {
    form: {
      width: 400,
      height: 150,
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
