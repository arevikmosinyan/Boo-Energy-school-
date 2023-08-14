import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  makeStyles,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';
import {
  HOME_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  RESET_ROUTE,
} from '../../constants/routes';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { colors, fonts } from '../../constants/variables';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, getUserData } from '../../requests/firebase';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const latinLettersRegex = /^[a-zA-Z0-9!@#$%^&*()_+=\-{}[\]|:;"'<>,.?/`~]+$/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const specialSimbolRegex = /[!@#$%^&*()_+=\-{}[\]|:;"'<>,.?/`~]/;
  const numberRegex = /\d/;

  const includesLatinLetters = latinLettersRegex.test(password);
  const includesUpperCaseAndLowerCase =
    upperCaseRegex.test(password) && lowerCaseRegex.test(password);
  const includesSpecialSymbols = specialSimbolRegex.test(password);
  const includesNumber = numberRegex.test(password);

  function onCheckingValidationOfPassword() {
    if (password.length && password.length < 8) {
      return 'Գաղտնաբառը պետք է ներառի նվազագույնը 8 նիշ';
    } else if (password.length && !includesUpperCaseAndLowerCase) {
      if (!includesLatinLetters) {
        return 'գաղտնաբառը պետք է լինի լատինատառ';
      }
      return 'Գաղտնաբառը պետք է ներառի առնվազն մեկ մեծատառ և մեկ փոքրատառ';
    } else if (password.length && !includesSpecialSymbols) {
      return 'Գաղտնաբառը պետք է պարունակի առնվազն մեկ հատուկ սիմվոլ !,@,#,$,%,^,&,*,(),_,+,=,~';
    } else if (password.length && !includesNumber) {
      return 'գաղտնաբառը պետք է պարունակի առնվազն մեկ թվային արժեք';
    } else {
      return '';
    }
  }

  function emailValidation() {
    const emailTrimmed = email.trim();
    if (!emailRegex.test(emailTrimmed) && emailTrimmed.length > 4) {
      return 'Խնդրում ենք մուտքագրեք վավեր էլ․ հասցե ';
    }
  }

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(HOME_ROUTE);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, 111);
        if (
          errorCode === 'auth/user-not-found' ||
          errorCode === 'auth/invalid-email'
        ) {
          alert('Նման օգտատեր չի գտնվել');
        }
      });
  };

  return (
    <>
      <div className={classes.containerOfSignIn}>
        <div className={classes.wrapperOfPasswordAndEmail}>
          <div className={classes.wrapperOfInputFiledAndInputHeader}>
            <p className={classes.inputHeader}>Էլ․ փոստ</p>
            <TextField
              InputProps={{
                inputProps: { maxLength: 40 },
                className: classes.inputOfEmail,
              }}
              placeholder='Մուտքագրեք Ձեր Էլ․ փոստի հասցեն'
              variant='outlined'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailValidation()}
            />
          </div>
          <div className={classes.wrapperOfInputFiledAndInputHeader}>
            <p className={classes.inputHeader}>Գաղտնաբառ</p>
            <FormControl style={{ flex: 1 }} variant='outlined'>
              <TextField
                variant='outlined'
                required
                className={`${classes.passwordInput} `}
                placeholder='Մուտքագրեք Ձեր գաղտնաբառը'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={onCheckingValidationOfPassword()}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={(e) => setShowPassword(!showPassword)}
                        edge='end'>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  inputProps: { maxLength: 20 },
                }}
              />
            </FormControl>

            <NavLink to={RESET_ROUTE} className={classes.resetPassword}>
              Գաղտնաբառի վերականգնում
            </NavLink>
            <div className={classes.wrapperOfnavigateToRegisterLink}>
              <p className={classes.areNotYouSignedUpQuestion}>Գրանցված չե՞ք</p>
              <NavLink to={SIGNUP_ROUTE} className={classes.linkToSignUp}>
                Գրանցում
              </NavLink>
            </div>
          </div>

          <form className={classes.wrapperOfButtonSignIn}>
            <Button
              type='submit'
              variant='outlined'
              className={classes.buttonSignIn}
              onClick={onLogin}>
              Մուտք
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
/*-----------------------------------------Styles--------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  containerOfSignIn: {
    margin: 50,
    padding: 25,
    borderRadius: 15,
    border: `2px solid ${colors.yellow}`,
  },

  wrapperOfPasswordAndEmail: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50%',
    margin: 'auto',
  },
  passwordInput: {},
  wrapperOfInputFiledAndInputHeader: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },
  inputHeader: {
    color: colors.darkGreen,
    paddingBottom: 10,
    fontSize: '15px', // Default font size for smaller viewports
    [theme.breakpoints.up('sm')]: {
      fontSize: 'calc(2vw + 8px)', // Adjust font size for larger viewports
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px', // Maximum font size for even larger viewports
    },
    fontWeight: 400,
  },
  input: {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
  wrapperOfnavigateToRegisterLink: {
    display: 'flex',
    paddingTop: 15,
    paddingBottom: 15,
  },
  areNotYouSignedUpQuestion: {
    color: colors.yellow,
    fontFamily: fonts.armenian,
  },
  linkToSignUp: {
    paddingLeft: 10,
    color: colors.darkGreen,
  },
  resetPassword: {
    paddingTop: 15,
    color: colors.darkGreen,
    fontFamily: fonts.armenian,
  },
  // inputOfEmail: {
  //   border: '2px solid red',
  //   borderRadius: 10,

  // },
  buttonSignIn: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginTop: 15,
    '&:hover': {
      backgroundColor: colors.lightGreen,
    },
  },
}));
const theme = createTheme({
  overrides: {
    MuiRadio: {
      root: {
        color: colors.darkGreen,
        '&$checked': {
          color: colors.darkGreen,
        },
      },
    },
  },
});
