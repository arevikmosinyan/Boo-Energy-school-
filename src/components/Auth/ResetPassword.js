import React from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const ResetPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [resetText, setResetText] = useState('');

  const auth = getAuth();

  async function resetPassword() {
    await sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
        setResetText(
          'Խնդրում ենք ստուգեք Ձեր էլ․ փոստը, գաղտնաբառի վերականգնումը հաջողությամբ կատարվել է',
        );
      })
      .catch((err) => {
        setResetText(
          `Գաղտնաբառի վերականգնումը ձախողվել է. ${err.message.slice(15)}`,
        );
      });
  }

  return (
    <div className={classes.containerOfResetPassword}>
      <div className={classes.wrapperOfEmailInput}>
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
          //   helperText={emailValidation()}
        />
        <Button
          variant='outlined'
          className={classes.resetPasswordButton}
          onClick={resetPassword}>
          Վերականգնել գաղտնաբառը
        </Button>
        <div className={classes.resetText}>{resetText}</div>
      </div>
    </div>
  );
};

export default ResetPassword;

/*-----------------------------------------Styles--------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  containerOfResetPassword: {
    margin: 50,
    padding: 25,
    borderRadius: 15,
    border: `2px solid ${colors.yellow}`,
  },
  wrapperOfEmailInput: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '60%',
    margin: 'auto',
  },

  inputHeader: {
    color: colors.darkGreen,
    paddingBottom: 10,
    fontSize: '5px', // Default font size for smaller viewports
    [theme.breakpoints.up('sm')]: {
      fontSize: 'calc(2vw + 8px)', // Adjust font size for larger viewports
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px', // Maximum font size for even larger viewports
    },
    fontWeight: 400,
    fontFamily: fonts.armenian,
  },
  resetPasswordButton: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    margin: 15,
    '&:hover': {
      backgroundColor: colors.lightGreen,
    },
  },
  resetText: {
    fontFamily: fonts.armenian,
    color: colors.darkGreen,
    textAlign: 'center',
  },
}));
