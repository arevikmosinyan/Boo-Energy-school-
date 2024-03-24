import React from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';
import { colors, fonts } from '../../constants/variables';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();
  const [email, setEmail] = useState('');
  const [resetText, setResetText] = useState('');
  const { t } = useTranslation();

  const auth = getAuth();

  async function resetPassword() {
    await sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
        setResetText(t('successMessageOfResettingPassword'));
      })
      .catch((err) => {
        setResetText(
          `${t('failMessageOfResettingPassword')} ${err.message.slice(15)}`,
        );
      });
  }

  return (
    <div
      className={`${classes.containerOfResetPassword} ${classesForMediaQueries.containerOfResetPassword}`}>
      <div
        className={`${classes.wrapperOfEmailInput} ${classesForMediaQueries.wrapperOfEmailInput}`}>
        <p className={classes.inputHeader}>{t('email')}</p>

        <TextField
          InputProps={{
            inputProps: { maxLength: 40 },
            className: classes.placeholderStyles,
          }}
          placeholder={t('enterEmailAddress')}
          variant='outlined'
          required
          value={email.trim()}
          onChange={(e) => setEmail(e.target.value)}
          //   helperText={emailValidation()}
          className={classes.input}
        />
        <Button
          variant='outlined'
          className={classes.resetPasswordButton}
          onClick={resetPassword}>
          {t('resetPassword')}
        </Button>
        <div className={classes.resetText}>{resetText}</div>
      </div>
    </div>
  );
};

export default ResetPassword;

/*-----------------------------------------Mobile-firstStyles--------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  containerOfResetPassword: {
    margin: 50,
    padding: 25,
    borderRadius: 15,
    border: `2px solid ${colors.yellow}`,
    minHeight: '60vh',
  },
  wrapperOfEmailInput: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
  },
  inputHeader: {
    color: colors.darkGreen,
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: '20px', // default
    [theme.breakpoints.up('sm')]: {
      fontSize: 'calc(2vw + 8px)', // small screen
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px', // medium screen
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
  placeholderStyles: {
    fontSize: 'clamp(5px, 3vw,17px)',
  },
}));
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (min-width:993px)': {
    containerOfResetPassword: {
      maxWidth: '60%',
      minHeight: '70vh',
      margin: '60px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapperOfEmailInput: {
      width: '80%',
      // margin: 'auto 25px',
    },
  },
});
