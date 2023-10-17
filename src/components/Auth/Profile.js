import React from 'react';
import userDataContext from '../../contexts/userDataContext';
import { useContext, useState } from 'react';
import Loading from '../Loading';
import { ref, remove } from 'firebase/database';
import { HOME_ROUTE } from '../../constants/routes';

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
// import loadingContext from '../../contexts/dataLoadingContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const classes = useStyles();
  const userData = useContext(userDataContext);
  // const loading = useContext(loadingContext);
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
        {/* {loading ? (
          <Loading />
        ) : ( */}
        <List>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`${t('name')}: ${userData?.name}`}
              className={classes.prevName}
            />
            <TextField
              placeholder={t('enterName')}
              variant='outlined'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.formControl}
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
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`${t('surname')}: ${userData?.surname}`}
              className={classes.prevName}
            />
            <TextField
              placeholder={t('enterSurname')}
              variant='outlined'
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className={classes.formControl}
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
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`${t('role')}: ${userData?.role}`}
              className={classes.prevName}
            />
            <FormControl variant='outlined' className={classes.formControl}>
              <Select
                className={classes.formControl}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Select country' }}>
                <MenuItem value='Նախադպրոցական'>
                  <em>{t('preSchool')}</em>
                </MenuItem>
                <MenuItem value={'Դպրոցական'}>{t('school')}</MenuItem>
                <MenuItem value={'Ուսանող'}>{t('student')}</MenuItem>
                <MenuItem value={'Դասախոս'}>{t('lecturer')}</MenuItem>
                <MenuItem value={'Ծնող'}>{t('parent')}</MenuItem>
                <MenuItem value={'Հյուր'}>{t('guest')}</MenuItem>
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
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`${t('country')}: ${userData?.country}`}
              className={classes.prevName}
            />
            <FormControl variant='outlined' className={classes.formControl}>
              <Select
                className={classes.formControl}
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
          <ListItem className={classes.listItem}>
            <div className={classes.prevName}>
              <ListItemText primary={t('educationalInstitution')} />
              <div>{userData?.educationCenter}</div>
            </div>

            <FormControl variant='outlined' className={classes.formControl}>
              <Select
                className={classes.select}
                value={educationCenter}
                onChange={(e) => setEducationCenter(e.target.value)}
                placeholder='Մուտքագրիր ուսումնական հաստատության հասցեն և ․․․'>
                <MenuItem value='Երևանի պետական համալսարան (ԵՊՀ)'>
                  <em>{t('yerevanStateUniversity(YSU)')} </em>
                </MenuItem>

                <MenuItem
                  value={'Հայաստանի պետական տնտեսագիտական համալսարան (ՀՊՏՀ)'}>
                  {t('armenianStateUniversityOfEconomics')}
                </MenuItem>
                <MenuItem value={'Հայաստանի գեղարվեստի պետական ակադեմիա'}>
                  {t('armenianStateAcademyOfFineArts')}
                </MenuItem>
                <MenuItem value={'Երևանի թատրոնի և կինոյի պետական ինստիտուտ'}>
                  {t('yerevanStateInstituteOfTheaterAndCinema')}
                </MenuItem>
                <MenuItem
                  value={
                    'Ճարտարապետության և շինարարարության Հայաստանի ազգային համալսարան'
                  }>
                  {t('armenianNationalUniversityOfArchitectureAndConstruction')}
                </MenuItem>
                <MenuItem
                  value={'Հայաստանի ազգային ագրարային համալսարան (ՀԱԱՀ)'}>
                  {t('armenianNationalAgrarianUniversity(NAAU)')}
                </MenuItem>
                <MenuItem value={'Երևանի պետական բժշկական համալսարան (ԵՊԲՀ)'}>
                  {t('yerevanStateMedicalUniversity(YSMU)')}
                </MenuItem>
                <MenuItem
                  value={
                    'Երևանի Պետական Լեզվաբանական Համալսարան, Վալերի Բրյուսովի անվան, (ԵՊԼՀ)'
                  }>
                  {t('yerevanStateLinguisticUniversityNamedAfterValeryBrusov')}
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
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`${t('ratingForReading')}: ${userData?.scoreForReading}`}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`կարդացած դասերի համարներ: ${
                String(userData?.alreadyReadClassesIds) ||
                'Դուք դեռևս չունեք ընթերցած դասեր'
              }`}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              primary={`${t('titlesOfLessonsRead')}: ${
                String(userData?.alreadyReadClassesTitles) ||
                t('youHaveNoLessonsReadYet')
              }`}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
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
                <Button onClick={onDeleteAccount} color='primary' type='submit'>
                  {t('confirm')}
                </Button>
              </DialogActions>
            </Dialog>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default Profile;
/*-----------------------------------------Styles--------------------------------------------*/

const useStyles = makeStyles((theme) => ({
  header: {
    color: colors.darkGreen,
    textAlign: 'center',
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
  },
  prevName: {
    flex: 1,
    margin: 5,
  },
  formControl: {
    flex: 1,
    margin: 5,
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
