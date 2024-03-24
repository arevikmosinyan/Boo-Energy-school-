import React from 'react';
import userDataContext from '../../contexts/userDataContext';
import { useContext, useState } from 'react';
import Loading from '../Loading';
import { ref, remove } from 'firebase/database';
import { HOME_ROUTE } from '../../constants/routes';
import '../../assest/styles/customMUI.css';

import {
  makeStyles,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { colors } from '../../constants/variables';

import { writeUserData, auth, database } from '../../requests/firebase';
import loadingContext from '../../contexts/dataLoadingContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  const userData = useContext(userDataContext);
  const loading = useContext(loadingContext);
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  // console.log(loading);
  const [educationCenter, setEducationCenter] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { t } = useTranslation();

  function changeCountry() {
    writeUserData({
      ...userData,
      country,
    });
  }

  function changeEducationalCenter() {
    writeUserData({
      ...userData,
      educationCenter,
    });
  }

  function changeTheRole() {
    writeUserData({
      ...userData,
      role,
    });
  }

  function changeName() {
    writeUserData({
      ...userData,
      name,
    });
  }

  function changeSurname() {
    writeUserData({
      ...userData,
      surname,
    });
  }

  const onDeleteAccount = async () => {
    setDeleteDialogOpen(false);

    try {
      const userRef = ref(
        database,
        'users/' + userData?.email.replace('.', ','),
      );
      await remove(userRef);
      await auth.currentUser.delete();
      navigate(HOME_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card className={classes.container}>
        <Typography variant='h5' className={classes.header}>
          {t('profilePagePersonalInformationHeader')}
        </Typography>
        {loading ? (
          <Loading />
        ) : (
          <List className={`${classes.list} ${classesForMediaQueries.list}`}>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`${t('name')}: ${userData?.name}`}
                className={`${classes.prevName} ${classesForMediaQueries.prevName}`}
              />
              <TextField
                placeholder={t('enterName')}
                InputProps={{
                  className: classes.placeholderStyle,
                }}
                variant='outlined'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${classes.formControl} ${classesForMediaQueries.formControl}`}
              />

              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeName}>
                  {t('confirmChanges')}
                </Button>
              </form>
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`${t('surname')}: ${userData?.surname}`}
                className={`${classes.prevName} ${classesForMediaQueries.prevName}`}
              />
              <TextField
                placeholder={t('enterSurname')}
                InputProps={{
                  className: classes.placeholderStyle,
                }}
                variant='outlined'
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className={`${classes.formControl} ${classesForMediaQueries.formControl}`}
              />

              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeSurname}>
                  {t('confirmChanges')}
                </Button>
              </form>
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`${t('role')}: ${userData?.role}`}
                className={`${classes.prevName} ${classesForMediaQueries.prevName}`}
              />
              <FormControl
                variant='outlined'
                className={`${classes.formControl} ${classesForMediaQueries.formControl}`}>
                <Select
                  className={classes.select}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select country' }}>
                  <MenuItem value={t('preSchool')}>
                    <em>{t('preSchool')}</em>
                  </MenuItem>
                  <MenuItem value={t('school')}>{t('school')}</MenuItem>
                  <MenuItem value={t('student')}>{t('student')}</MenuItem>
                  <MenuItem value={t('lecturer')}>{t('lecturer')}</MenuItem>
                  <MenuItem value={t('parent')}>{t('parent')}</MenuItem>
                  <MenuItem value={t('guest')}>{t('guest')}</MenuItem>
                </Select>
              </FormControl>
              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeTheRole}>
                  {t('confirmChanges')}
                </Button>
              </form>
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`${t('country')}: ${userData?.country}`}
                className={`${classes.prevName} ${classesForMediaQueries.prevName}`}
              />
              <FormControl
                variant='outlined'
                className={`${classes.formControl} ${classesForMediaQueries.formControl}`}>
                <Select
                  className={classes.select}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select country' }}>
                  <MenuItem value={t('armenia')}>
                    <em>{t('armenia')}</em>
                  </MenuItem>
                  <MenuItem value={t('russia')}>{t('russia')}</MenuItem>
                  <MenuItem value={t('georgia')}>{t('georgia')}</MenuItem>
                  <MenuItem value={t('iran')}>{t('iran')}</MenuItem>
                  <MenuItem value={t('canada')}>{t('canada')}</MenuItem>
                  <MenuItem value={t('germany')}>{t('germany')}</MenuItem>
                  <MenuItem value={t('US')}>{t('US')}</MenuItem>
                  <MenuItem value={t('syria')}>{t('syria')}</MenuItem>
                  <MenuItem value={t('denmark')}>{t('denmark')}</MenuItem>
                </Select>
              </FormControl>
              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeCountry}>
                  {t('confirmChanges')}
                </Button>
              </form>
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <div
                className={`${classes.prevName} ${classesForMediaQueries.prevName}`}>
                <ListItemText primary={t('educationalInstitution')} />
                <div>{userData?.educationCenter}</div>
              </div>

              <FormControl
                variant='outlined'
                className={`${classes.formControl} ${classesForMediaQueries.formControl}`}>
                <Select
                  className={classes.select}
                  value={educationCenter}
                  onChange={(e) => setEducationCenter(e.target.value)}
                  placeholder='Մուտքագրիր ուսումնական հաստատության հասցեն և ․․․'>
                  <MenuItem value={t('yerevanStateUniversity(YSU)')}>
                    <em>{t('yerevanStateUniversity(YSU)')} </em>
                  </MenuItem>

                  <MenuItem value={t('armenianStateUniversityOfEconomics')}>
                    {t('armenianStateUniversityOfEconomics')}
                  </MenuItem>
                  <MenuItem value={t('armenianStateAcademyOfFineArts')}>
                    {t('armenianStateAcademyOfFineArts')}
                  </MenuItem>
                  <MenuItem
                    value={t('yerevanStateInstituteOfTheaterAndCinema')}>
                    {t('yerevanStateInstituteOfTheaterAndCinema')}
                  </MenuItem>
                  <MenuItem
                    value={t(
                      'armenianNationalUniversityOfArchitectureAndConstruction',
                    )}>
                    {t(
                      'armenianNationalUniversityOfArchitectureAndConstruction',
                    )}
                  </MenuItem>
                  <MenuItem
                    value={t('armenianNationalAgrarianUniversity(NAAU)')}>
                    {t('armenianNationalAgrarianUniversity(NAAU)')}
                  </MenuItem>
                  <MenuItem value={t('yerevanStateMedicalUniversity(YSMU)')}>
                    {t('yerevanStateMedicalUniversity(YSMU)')}
                  </MenuItem>
                  <MenuItem
                    value={t(
                      'yerevanStateLinguisticUniversityNamedAfterValeryBrusov',
                    )}>
                    {t(
                      'yerevanStateLinguisticUniversityNamedAfterValeryBrusov',
                    )}
                  </MenuItem>
                </Select>
              </FormControl>
              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeEducationalCenter}>
                  {t('confirmChanges')}
                </Button>
              </form>
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`${t('ratingForReading')}: ${
                  userData?.scoreForReading
                }`}
              />
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`կարդացած դասերի համարներ: ${
                  String(userData?.alreadyReadClassesIds) ||
                  'Դուք դեռևս չունեք ընթերցած դասեր'
                }`}
              />
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <ListItemText
                primary={`${t('titlesOfLessonsRead')}: ${
                  String(userData?.alreadyReadClassesTitles) ||
                  t('youHaveNoLessonsReadYet')
                }`}
              />
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${classesForMediaQueries.listItem}`}>
              <Button
                variant='outlined'
                className={classes.deleteButton}
                onClick={() => setDeleteDialogOpen(true)}>
                {t('IDoNotWantToBeAUserAnymore')}
              </Button>
              <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}>
                <DialogContent>
                  <DialogContentText>
                    {t('areYouSureYouDoNotWantToBeAUserAnyMore')}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setDeleteDialogOpen(false)}
                    color='primary'>
                    {t('cancel')}
                  </Button>
                  <Button
                    onClick={onDeleteAccount}
                    color='primary'
                    type='submit'>
                    {t('confirm')}
                  </Button>
                </DialogActions>
              </Dialog>
            </ListItem>
          </List>
        )}
      </Card>
    </>
  );
};

export default Profile;
/*-----------------------------------------Mobile-firstStyles--------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  header: {
    color: colors.darkGreen,
    textAlign: 'center',
  },
  list: {
    margin: 5,
    padding: 5,
  },
  container: {
    margin: 50,
    padding: 25,
    borderRadius: 15,
    border: `2px solid ${colors.darkGreen}`,
  },
  listItem: {
    border: `2px solid ${colors.darkGreen}`,
    borderRadius: 10,
    margin: 10,
    color: colors.darkGreen,
    display: 'flex',
    flexDirection: 'column',
  },
  prevName: {
    margin: 5,
    textAlign: 'center',
  },
  formControl: {
    margin: 5,
    width: '70%',
  },
  placeholderStyle: {
    fontSize: 'clamp(8px, 3vw,17px)',
  },
  acceptChangesButton: {
    color: colors.white,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    '&:hover': {
      backgroundColor: colors.lightGreen,
    },
  },
  deleteButton: {
    color: 'red',
    borderColor: 'red',
    margin: 'auto',
    '&:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
  },
}));
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (min-width:601px) and (max-width:992px)': {
    formControl: {
      width: '50%',
    },
  },
  '@media (min-width:993px)': {
    listItem: {
      flexDirection: 'row',
    },
    formControl: {
      flex: 1,
      fontSize: '4rem',
    },
    prevName: {
      flex: 1,
      textAlign: 'left',
    },
    acceptChangesButton: {
      flex: 1,
    },
  },
});
