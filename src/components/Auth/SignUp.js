import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
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
import Loading from '../Loading';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { colors, fonts } from '../../constants/variables';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  auth,
  writeUserData,
  database,
  getUserData,
} from '../../requests/firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
// import loadingContext from '../../contexts/dataLoadingContext';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const navigate = useNavigate();
  // const loading = useContext(loadingContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [educationCenter, setEducationCenter] = useState('');
  const [country, setCountry] = useState('');
  const [scoreForReading, setScoreForReading] = useState(0);
  const [alreadyReadClassesIds, setAlreadyReadClassesIds] = useState(['']);
  const [alreadyReadClassesTitles, setAlreadyReadClassesTitles] = useState([
    '',
  ]);
  const { t } = useTranslation();
  const refOfwrapperOfnavigateToLoginLink = useRef();
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    refOfwrapperOfnavigateToLoginLink?.current.scrollIntoView({
      block: 'center',
    });
  }, [location.state]);

  const locationEmail = location.state;

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
      return t('minCountOfCharsOfPasswordValidation');
    } else if (password.length && !includesUpperCaseAndLowerCase) {
      if (!includesLatinLetters) {
        return t('latinLettersOfCharsOfPasswordValidation');
      }
      return t('capitalLetterAndSmallLetterOfCharsOfPasswordValidation');
    } else if (password.length && !includesSpecialSymbols) {
      return t('specialSymbolOfCharsOfPasswordValidation');
    } else if (password.length && !includesNumber) {
      return t('numberTypeOfCharsOfPasswordValidation');
    } else {
      return '';
    }
  }

  function emailValidation() {
    const emailToTestForValidation =
      email.trim() || locationEmail?.navigatedEmail;
    if (
      !emailRegex.test(emailToTestForValidation) &&
      emailToTestForValidation?.length > 1
    ) {
      return t('emailValidation');
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
      alert(t('requiredFields'));
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        sendEmailVerify();
        navigate(HOME_ROUTE);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    writeUserData({
      email,
      name,
      surname,
      role,
      gender,
      country,
      educationCenter,
      scoreForReading,
      alreadyReadClassesIds,
      alreadyReadClassesTitles,
    });
  };

  async function sendEmailVerify() {
    await sendEmailVerification(auth.currentUser).then(() => {
      alert('check your email');
    });
  }

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ()} */}
      <div className={classes.containerOfSignUp}>
        <ThemeProvider theme={theme}>
          <div
            ref={refOfwrapperOfnavigateToLoginLink}
            className={classes.wrapperOfnavigateToLoginLink}>
            <p className={classes.ifYouAreAlreadySignedUpQuestion}>
              {t('ifAlreadyRegisteredUser')}
            </p>
            <NavLink to={SIGNIN_ROUTE} className={classes.linkToSignIn}>
              {t('login')}
            </NavLink>
            <p className={classes.ifYouAreAlreadySignedUpQuestion}>
              {t('ifNot')}
            </p>
          </div>

          <div className={`${classes.header} `}>{t('register')}</div>
          <p className={classes.warningText}>
            {t('allTheFieldsMustBeFilledAndRegistrationIsFreeOfCharge')}
          </p>
          <div className={classes.wrapperOfGender}>
            <FormControl
              className={classes.genderFormControl}
              component='fieldset'>
              <FormLabel
                component='legend'
                className={`${classes.labelOfGender}`}>
                {t('gender')}*
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
                  label={t('male')}
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Իգական'
                  control={<Radio />}
                  label={t('female')}
                  className={`${classes.labelOfGender}`}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <FormControl className={classes.roleInThePortal}>
            <FormLabel
              component='legend'
              className={`${classes.labelOfGender}`}>
              {t('role')}*
            </FormLabel>

            <RadioGroup
              className={classes.radioGroup}
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <div className={classes.wrapperOfRadios}>
                <FormControlLabel
                  value='Նախադպրոցական'
                  control={<Radio />}
                  label={t('preSchool')}
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Դպրոցական'
                  control={<Radio />}
                  label={t('school')}
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Ուսանող'
                  control={<Radio />}
                  label={t('student')}
                  className={`${classes.labelOfGender}`}
                />
              </div>
              <div className={classes.wrapperOfRadios}>
                <FormControlLabel
                  value='Դասախոս'
                  control={<Radio />}
                  label={t('lecturer')}
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Ծնող'
                  control={<Radio />}
                  label={t('parent')}
                  className={`${classes.labelOfGender}`}
                />
                <FormControlLabel
                  value='Հյուր'
                  control={<Radio />}
                  label={t('guest')}
                  className={`${classes.labelOfGender}`}
                />
              </div>
            </RadioGroup>
          </FormControl>
          <div className={classes.textFields}>
            <div className={classes.wrapperOfEmailAndName}>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>{t('email')} *</p>
                <TextField
                  InputProps={{
                    inputProps: { maxLength: 30 },
                  }}
                  placeholder={t('enterEmailAddress')}
                  variant='outlined'
                  required
                  className={classes.input}
                  value={locationEmail?.navigatedEmail || email.trim()}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  helperText={emailValidation()}
                />
              </div>
              <div className={classes.wrapperOfInputFiledAndInputHeader}>
                <p className={classes.inputHeader}>{t('name')}*</p>
                <TextField
                  placeholder={t('enterName')}
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
                <p className={classes.inputHeader}>{t('password')}*</p>
                <FormControl className={classes.input} variant='outlined'>
                  <TextField
                    variant='outlined'
                    required
                    className={classes.passwordInput}
                    placeholder={t('enterYourPassword')}
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
                <p className={classes.inputHeader}>{t('surname')}*</p>
                <TextField
                  id='outlined-start-adornment'
                  placeholder={t('enterSurname')}
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
              {t('educationalInstitution')}
            </p>
            <div className={classes.wrapperOfCountriesAndEducationCenters}>
              <div className={classes.wrapperOfCountries}>
                <p style={{ paddingBottom: 10, color: colors.darkGreen }}>
                  {t('country')}
                </p>
                <FormControl variant='outlined' className={classes.formControl}>
                  <Select
                    className={classes.select}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select country' }}>
                    <MenuItem value='Հայաստան'>
                      <em>{t('armenia')}</em>
                    </MenuItem>
                    <MenuItem value={'Ռուսաստան'}>{t('russia')}</MenuItem>
                    <MenuItem value={'Վրաստան'}>{t('georgia')}</MenuItem>
                    <MenuItem value={'Իրան'}>{t('iran')}</MenuItem>
                    <MenuItem value={'Կանադա'}>{t('canada')}</MenuItem>
                    <MenuItem value={'Գերմանիա'}>{t('germany')}</MenuItem>
                    <MenuItem value={'ԱՄՆ'}>{t('US')}</MenuItem>
                    <MenuItem value={'Սիրիա'}>{t('syria')}</MenuItem>
                    <MenuItem value={'Դանիա'}>{t('denmark')}</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.wrapperOfEducationCenters}>
                <p style={{ paddingBottom: 10, color: colors.darkGreen }}>
                  {t('labelOfEducationalInstitution')}
                </p>
                <FormControl variant='outlined' className={classes.formControl}>
                  <Select
                    className={classes.select}
                    value={educationCenter}
                    onChange={(e) => setEducationCenter(e.target.value)}>
                    <MenuItem value='Երևանի պետական համալսարան (ԵՊՀ)'>
                      <em>{t('yerevanStateUniversity(YSU)')}</em>
                    </MenuItem>

                    <MenuItem
                      value={
                        'Հայաստանի պետական տնտեսագիտական համալսարան (ՀՊՏՀ)'
                      }>
                      {t('armenianStateUniversityOfEconomics')}
                    </MenuItem>
                    <MenuItem value={'Հայաստանի գեղարվեստի պետական ակադեմիա'}>
                      {t('armenianStateAcademyOfFineArts')}
                    </MenuItem>
                    <MenuItem
                      value={'Երևանի թատրոնի և կինոյի պետական ինստիտուտ'}>
                      {t('yerevanStateInstituteOfTheaterAndCinema')}
                    </MenuItem>
                    <MenuItem
                      value={
                        'Ճարտարապետության և շինարարարության Հայաստանի ազգային համալսարան'
                      }>
                      {t(
                        'armenianNationalUniversityOfArchitectureAndConstruction',
                      )}
                    </MenuItem>
                    <MenuItem
                      value={'Հայաստանի ազգային ագրարային համալսարան (ՀԱԱՀ)'}>
                      {t('armenianNationalAgrarianUniversity(NAAU)')}
                    </MenuItem>
                    <MenuItem
                      value={'Երևանի պետական բժշկական համալսարան (ԵՊԲՀ)'}>
                      {t('yerevanStateMedicalUniversity(YSMU)')}
                    </MenuItem>
                    <MenuItem
                      value={
                        'Երևանի Պետական Լեզվաբանական Համալսարան, Վալերի Բրյուսովի անվան, (ԵՊԼՀ)'
                      }>
                      {t(
                        'yerevanStateLinguisticUniversityNamedAfterValeryBrusov',
                      )}
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
            {t('register')}
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
