import React from 'react';
import { useState } from 'react';
import {
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  Button,
  MenuItem,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { colors, fonts } from '../constants/variables';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const SignUp = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    email: '',
  });
  const [country, setCountry] = useState('');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const latinLettersRegex = /^[a-zA-Z0-9!@#$%^&*()_+=\-{}[\]|:;"'<>,.?/`~]+$/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const specialSimbolRegex = /[!@#$%^&*()_+=\-{}[\]|:;"'<>,.?/`~]/;
  const numberRegex = /\d/;

  const includesLatinLetters = latinLettersRegex.test(values.password);
  const includesUpperCaseAndLowerCase =
    upperCaseRegex.test(values.password) &&
    lowerCaseRegex.test(values.password);
  const includesSpecialSymbols = specialSimbolRegex.test(values.password);
  const includesNumber = numberRegex.test(values.password);

  function onCheckingValidationOfPassword() {
    if (values.password.length && values.password.length < 8) {
      return 'Գաղտնաբառը պետք է ներառի նվազագույնը 8 նիշ';
    } else if (values.password.length && !includesUpperCaseAndLowerCase) {
      if (!includesLatinLetters) {
        return 'գաղտնաբառը պետք է լինի լատինատառ';
      }
      return 'Գաղտնաբառը պետք է ներառի առնվազն մեկ մեծատառ և մեկ փոքրատառ';
    } else if (values.password.length && !includesSpecialSymbols) {
      return 'Գաղտնաբառը պետք է պարունակի առնվազն մեկ հատուկ սիմվոլ !,@,#,$,%,^,&,*,(),_,+,=,~';
    } else if (values.password.length && !includesNumber) {
      return 'գաղտնաբառը պետք է պարունակի առնվազն մեկ թվային արժեք';
    } else {
      return '';
    }
  }

  function emailValidation() {
    if (!emailRegex.test(values.email) && values.email.length > 4) {
      return 'Խնդրում ենք մուտքագրեք վավեր էլ․ հասցե ';
    }
  }

  function handleChangeOfPassword(event) {
    setValues({
      ...values,
      password: event.target.value,
    });
  }

  function handleChangeOfEmail(event) {
    setValues({
      ...values,
      email: event.target.value,
    });
  }

  function handleClickShowPassword() {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  function handleChangeOfCountry(event) {
    setCountry(event.target.value);
  }

  return (
    <>
      <div className={classes.containerOfSignUp}>
        <ThemeProvider theme={theme}>
          <div className={`${classes.header} `}>Գրանցում</div>
          <p style={{ fontSize: 20 }}>
            Ուշադրություն, գրանցվելու համար պետք է լրացնել բոլոր տողերը։ Կայքում
            գրանցվելն անվճար է։
          </p>
          <div className={classes.wrapperOfGender}>
            <FormControl
              className={classes.genderFormControl}
              component='fieldset'>
              <FormLabel
                component='legend'
                className={`${classes.labelOfGender}`}>
                Սեռ
              </FormLabel>
              <RadioGroup row aria-label='gender' name='gender1'>
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Արական'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Իգական'
                  className={`${classes.labelOfGender}`}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <FormControl className={classes.roleInThePortal}>
            <FormLabel
              component='legend'
              className={`${classes.labelOfGender}`}>
              Դերը պորտալում
            </FormLabel>

            <RadioGroup className={classes.radioGroup}>
              <div className={classes.wrapperOfRadios}>
                <FormControlLabel
                  value='1'
                  control={<Radio />}
                  label='Նախադպրոցական'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='2'
                  control={<Radio />}
                  label='Դպրոցական'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='3'
                  control={<Radio />}
                  label='Ուսանող'
                  className={`${classes.labelOfGender}`}
                />
              </div>
              <div className={classes.wrapperOfRadios}>
                <FormControlLabel
                  value='4'
                  control={<Radio />}
                  label='Դասախոս'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='5'
                  control={<Radio />}
                  label='Ծնող'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='6'
                  control={<Radio />}
                  label='Հյուր'
                  className={`${classes.labelOfGender}`}
                />
              </div>
            </RadioGroup>
          </FormControl>
          <div className={classes.textFields}>
            <div className={classes.wrapperOfEmailAndName}>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Էլ․ փոստ</p>
                <TextField
                  InputProps={{
                    inputProps: { maxLength: 20 },
                  }}
                  placeholder='մուտքագրեք Ձեր Էլ․ փոստի հասցեն'
                  variant='outlined'
                  className={classes.input}
                  value={values.email}
                  onChange={handleChangeOfEmail}
                  helperText={emailValidation()}
                />
              </div>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Անուն</p>
                <TextField
                  placeholder='մուտքագրեք Ձեր անունը'
                  variant='outlined'
                  className={classes.input}
                />
              </div>
            </div>
            <div className={classes.wrapperOfPasswordAndSurname}>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Գաղտնաբառ</p>
                <FormControl className={classes.input} variant='outlined'>
                  <TextField
                    variant='outlined'
                    className={classes.passwordInput}
                    placeholder='Մուտքագրեք Ձեր գաղտնաբառը'
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChangeOfPassword}
                    helperText={onCheckingValidationOfPassword()}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge='end'>
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                      inputProps: { maxLength: 20 },
                    }}
                  />
                </FormControl>
              </div>

              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Ազգանուն</p>
                <TextField
                  id='outlined-start-adornment'
                  placeholder='մուտքագրեք Ձեր ազգանունը'
                  variant='outlined'
                  className={classes.input}
                />
              </div>
            </div>
          </div>
          <div className={classes.wrapperOfEducationCentersSection}>
            <p className={classes.headerOfEducationSection}>
              Ուսումնական հաստատություն
            </p>
            <div className={classes.wrapperOfCountriesAndEducationCenters}>
              <div className={classes.wrapperOfCountries}>
                <p style={{ paddingBottom: 10 }}>Երկիր</p>
                <FormControl variant='outlined' className={classes.formControl}>
                  <Select
                    value={country}
                    onChange={handleChangeOfCountry}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select country' }}>
                    <MenuItem value=''>
                      <em>Հայաստան</em>
                    </MenuItem>
                    <MenuItem value={20}>Ռուսաստան</MenuItem>
                    <MenuItem value={30}>Վրաստան</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.wrapperOfEducationCenters}>
                <p style={{ paddingBottom: 10 }}>
                  Ոսումնական հաստատության որոնում
                </p>
                <FormControl variant='outlined' className={classes.formControl}>
                  <Select
                    // value={age}
                    // onChange={handleChangeAge}
                    placeholder='Մուտքագրիր ուսումնական հաստատության հասցեն և ․․․'>
                    {/* <MenuItem value=''>
                    <em>None</em>
                  </MenuItem> */}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </ThemeProvider>
        <form className={classes.wrapperOfButtonSignUp}>
          <Button
            type='submit'
            variant='outlined'
            className={classes.buttonSignUp}
            // onClick={onSubmitForSignUp}
          >
            Գրանցում
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

/*-----------------------------------------Styles--------------------------------------------*/

const useStyles = makeStyles({
  containerOfSignUp: {
    margin: 50,
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    fontFamily: fonts.armenian,
  },
  wrapperOfGender: {
    marginTop: 30,
    marginBottom: 30,
  },
  labelOfGender: {
    color: 'black',
    fontSize: 30,
    paddingBottom: 20,
  },
  radio: {
    color: colors.darkGreen,
    '&$checked': {
      color: colors.darkGreen,
    },
  },
  roleInThePortal: { display: 'block' },
  textFields: {
    marginTop: 50,
    marginBottom: 50,
  },
  wrapperOfEmailAndName: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  eye: {
    margin: 0,

    padding: 0,
  },
  wrapperOfPasswordAndSurname: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  passwordInput: {},
  wrapperOfInputFiledAndInputHeader: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    flex: 1,
  },
  inputHeader: {
    paddingBottom: 10,
  },
  input: {
    flex: 1,
  },
  radioGroup: {
    display: 'inline-flex',
    flexDirection: 'row',
  },
  wrapperOfRadios: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapperOfEducationCentersSection: {
    backgroundColor: 'rgba(237,237,237,0.7)',
    padding: 20,
  },
  headerOfEducationSection: {
    textAlign: 'center',
    paddingBottom: 60,
    fontFamily: fonts.armenian,
    fontWeight: 1000,
    fontSize: 20,
  },
  wrapperOfCountriesAndEducationCenters: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  wrapperOfCountries: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2 / 6,
  },
  wrapperOfEducationCenters: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3 / 6,
  },
  wrapperOfButtonSignUp: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonSignUp: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginTop: 15,
    '&:hover': {
      backgroundColor: colors.lightGreen,
    },
  },
});
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
