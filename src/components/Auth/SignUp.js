import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, get, query, orderByChild, equalTo } from 'firebase/database';
import { HOME_ROUTE, SIGNIN_ROUTE } from '../../constants/routes';
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
import { colors, fonts } from '../../constants/variables';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { auth, writeUserData, database } from '../../requests/firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  // const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [educationCenter, setEducationCenter] = useState('');
  const [country, setCountry] = useState('');

  const classes = useStyles();

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
    if (!emailRegex.test(email) && email.length > 4) {
      return 'Խնդրում ենք մուտքագրեք վավեր էլ․ հասցե ';
    }
  }

  const register = async (e) => {
    e.preventDefault();

    const usersRef = ref(database, 'users');
    const snapshot = await get(
      query(usersRef, orderByChild('email'), equalTo(email)),
    );
    if (snapshot.exists()) {
      alert('User with this email already exists.');
      return;
    }
    if (!role || !gender || !name || !surname || !email || !password) {
      alert('Խնդրում ենք նշել բոլոր պարտադիր դաշտերը');
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(HOME_ROUTE);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    sendEmailVerify();
    writeUserData({
      email,
      name,
      surname,
      role,
      gender,
      country,
      educationCenter,
    });
    // setDisplayName(`${name} ${surname}`);
  };

  async function sendEmailVerify() {
    await sendEmailVerification(auth.currentUser).then(() => {
      alert('check your email');
    });
  }

  return (
    <>
      <div className={classes.containerOfSignUp}>
        <ThemeProvider theme={theme}>
          <div className={classes.wrapperOfnavigateToLoginLink}>
            <p className={classes.ifYouAreAlreadySignedUpQuestion}>
              Եթե արդեն գրանցված օգտատեր եք ապա
            </p>
            <NavLink to={SIGNIN_ROUTE} className={classes.linkToSignIn}>
              Մուտք
            </NavLink>
            <p className={classes.ifYouAreAlreadySignedUpQuestion}>եթե ոչ՝</p>
          </div>

          <div className={`${classes.header} `}>Գրանցում</div>
          <p className={classes.warningText}>
            Ուշադրությու՛ն, գրանցվելու համար պետք է լրացնել բոլոր տողերը։
            Կայքում գրանցվելն անվճար է։
          </p>
          <div className={classes.wrapperOfGender}>
            <FormControl
              className={classes.genderFormControl}
              component='fieldset'>
              <FormLabel
                component='legend'
                className={`${classes.labelOfGender}`}>
                Սեռ*
              </FormLabel>
              <RadioGroup
                row
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}>
                <FormControlLabel
                  value='Արական'
                  control={<Radio />}
                  label='Արական'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Իգական'
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
              Դերը պորտալում*
            </FormLabel>

            <RadioGroup
              className={classes.radioGroup}
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <div className={classes.wrapperOfRadios}>
                <FormControlLabel
                  value='Նախադպրոցական'
                  control={<Radio />}
                  label='Նախադպրոցական'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Դպրոցական'
                  control={<Radio />}
                  label='Դպրոցական'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Ուսանող'
                  control={<Radio />}
                  label='Ուսանող'
                  className={`${classes.labelOfGender}`}
                />
              </div>
              <div className={classes.wrapperOfRadios}>
                <FormControlLabel
                  value='Դասախոս'
                  control={<Radio />}
                  label='Դասախոս'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Ծնող'
                  control={<Radio />}
                  label='Ծնող'
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Հյուր'
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
                <p className={classes.inputHeader}>Էլ․ փոստ *</p>
                <TextField
                  InputProps={{
                    inputProps: { maxLength: 30 },
                  }}
                  placeholder='Մուտքագրեք Ձեր Էլ․ փոստի հասցեն'
                  variant='outlined'
                  required
                  className={classes.input}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // if (emailError) {
                    //   alert(emailError);
                    //   setEmailError('');
                    //                       }
                  }}
                  helperText={emailValidation()}
                />
              </div>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Անուն *</p>
                <TextField
                  placeholder='Մուտքագրեք Ձեր անունը'
                  variant='outlined'
                  required
                  className={classes.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={classes.wrapperOfPasswordAndSurname}>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Գաղտնաբառ *</p>
                <FormControl className={classes.input} variant='outlined'>
                  <TextField
                    variant='outlined'
                    required
                    className={classes.passwordInput}
                    placeholder='Մուտքագրեք Ձեր գաղտնաբառը'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    helperText={onCheckingValidationOfPassword()}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge='end'>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      inputProps: { maxLength: 20 },
                    }}
                  />
                </FormControl>
              </div>

              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>Ազգանուն *</p>
                <TextField
                  id='outlined-start-adornment'
                  placeholder='Մուտքագրեք Ձեր ազգանունը'
                  variant='outlined'
                  required
                  className={classes.input}
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
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
                <p style={{ paddingBottom: 10, color: colors.darkGreen }}>
                  Երկիր
                </p>
                <FormControl variant='outlined' className={classes.formControl}>
                  <Select
                    className={classes.select}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select country' }}>
                    <MenuItem value='Հայաստան'>
                      <em>Հայաստան</em>
                    </MenuItem>
                    <MenuItem value={'Ռուսաստան'}>Ռուսաստան</MenuItem>
                    <MenuItem value={'Վրաստան'}>Վրաստան</MenuItem>
                    <MenuItem value={'Իրան'}>Իրան</MenuItem>
                    <MenuItem value={'Կանադա'}>Կանադա</MenuItem>
                    <MenuItem value={'Գերմանիա'}>Գերմանիա</MenuItem>
                    <MenuItem value={'ԱՄՆ'}>ԱՄՆ</MenuItem>
                    <MenuItem value={'Սիրիա'}>Սիրիա</MenuItem>
                    <MenuItem value={'Դանիա'}>Դանիա</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.wrapperOfEducationCenters}>
                <p style={{ paddingBottom: 10, color: colors.darkGreen }}>
                  Ոսումնական հաստատության որոնում
                </p>
                <FormControl variant='outlined' className={classes.formControl}>
                  <Select
                    className={classes.select}
                    value={educationCenter}
                    onChange={(e) => setEducationCenter(e.target.value)}
                    placeholder='Մուտքագրիր ուսումնական հաստատության հասցեն և ․․․'>
                    <MenuItem value='Երևանի պետական համալսարան (ԵՊՀ)'>
                      <em> Երևանի պետական համալսարան (ԵՊՀ)</em>
                    </MenuItem>

                    <MenuItem
                      value={
                        'Հայաստանի պետական տնտեսագիտական համալսարան (ՀՊՏՀ)'
                      }>
                      Հայաստանի պետական տնտեսագիտական համալսարան (ՀՊՏՀ)
                    </MenuItem>
                    <MenuItem value={'Հայաստանի գեղարվեստի պետական ակադեմիա'}>
                      Հայաստանի գեղարվեստի պետական ակադեմիա
                    </MenuItem>
                    <MenuItem
                      value={'Երևանի թատրոնի և կինոյի պետական ինստիտուտ'}>
                      Երևանի թատրոնի և կինոյի պետական ինստիտուտ
                    </MenuItem>
                    <MenuItem
                      value={
                        'Ճարտարապետության և շինարարարության Հայաստանի ազգային համալսարան'
                      }>
                      Ճարտարապետության և շինարարարության Հայաստանի ազգային
                      համալսարան
                    </MenuItem>
                    <MenuItem
                      value={'Հայաստանի ազգային ագրարային համալսարան (ՀԱԱՀ)'}>
                      Հայաստանի ազգային ագրարային համալսարան (ՀԱԱՀ)
                    </MenuItem>
                    <MenuItem
                      value={'Երևանի պետական բժշկական համալսարան (ԵՊԲՀ)'}>
                      Երևանի պետական բժշկական համալսարան (ԵՊԲՀ)
                    </MenuItem>
                    <MenuItem
                      value={
                        'Երևանի Պետական Լեզվաբանական Համալսարան, Վալերի Բրյուսովի անվան, (ԵՊԼՀ)'
                      }>
                      Երևանի Պետական Լեզվաբանական Համալսարան, Վալերի Բրյուսովի
                      անվան, (ԵՊԼՀ)
                    </MenuItem>
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
            onClick={register}>
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
    border: `2px solid ${colors.yellow} `,
    borderRadius: 10,
    padding: 30,
  },
  wrapperOfnavigateToLoginLink: {
    display: 'flex',
    paddingTop: 15,
    paddingBottom: 15,
  },
  ifYouAreAlreadySignedUpQuestion: {
    color: colors.yellow,
    fontFamily: fonts.armenian,
  },
  linkToSignIn: {
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.darkGreen,
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    fontFamily: fonts.armenian,
    color: colors.darkGreen,
  },
  warningText: {
    fontSize: 20,
    color: colors.yellow,
    padding: 4,
    letterSpacing: 2,
  },
  wrapperOfGender: {
    marginTop: 30,
    marginBottom: 30,
  },
  labelOfGender: {
    fontSize: 30,
    paddingBottom: 20,
    color: colors.darkGreen,
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
  // eye: {
  //   margin: 0,

  //   padding: 0,
  // },
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
    color: colors.darkGreen,
    fontSize: 20,
    fontWeight: 400,
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
    color: colors.darkGreen,
  },
  // select: {
  //   '& > *': {
  //     colors: colors.darkGreen,
  //   },
  // },
  // MenuItem: {
  //   color: colors.darkGreen,
  // },
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
