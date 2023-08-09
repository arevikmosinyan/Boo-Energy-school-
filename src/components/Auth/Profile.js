import React from 'react';
import userDataContext from '../../contexts/userDataContext';
import { useContext, useState } from 'react';
import Loading from '../Loading';
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
} from '@material-ui/core';
import { colors } from '../../constants/variables';
import { writeUserData } from '../../requests/firebase';
import loadingContext from '../../contexts/dataLoadingContext';

const Profile = () => {
  const classes = useStyles();
  const userData = useContext(userDataContext);
  const loading = useContext(loadingContext);
  const [country, setCountry] = useState('');
  console.log(loading);
  const [educationCenter, setEducationCenter] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

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

  return (
    <>
      <Card className={classes.container}>
        <Typography variant='h5' className={classes.header}>
          Անձնական տվյալներ
        </Typography>
        {loading ? (
          <Loading />
        ) : (
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText primary={`Անուն: ${userData?.name}`} />
              <TextField
                placeholder='Մուտքագրեք Ձեր անունը'
                variant='outlined'
                required
                className={classes.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeName}>
                  Հաստատել փոփոխությունը
                </Button>
              </form>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary={`Ազգանուն: ${userData?.surname}`} />
              <TextField
                placeholder='Մուտքագրեք Ձեր ազգանունը'
                variant='outlined'
                required
                className={classes.input}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />

              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeSurname}>
                  Հաստատել փոփոխությունը
                </Button>
              </form>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary={`Դերը պորտալում: ${userData?.role}`} />
              <FormControl variant='outlined' className={classes.formControl}>
                <Select
                  className={classes.select}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select country' }}>
                  <MenuItem value='Նախադպրոցական'>
                    <em>Նախադպրոցական</em>
                  </MenuItem>
                  <MenuItem value={'Դպրոցական'}>Դպրոցական</MenuItem>
                  <MenuItem value={'Ուսանող'}>Ուսանող</MenuItem>
                  <MenuItem value={'Դասախոս'}>Դասախոս</MenuItem>
                  <MenuItem value={'Ծնող'}>Ծնող</MenuItem>
                  <MenuItem value={'Հյուր'}>Հյուր</MenuItem>
                </Select>
              </FormControl>
              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeTheRole}>
                  Հաստատել փոփոխությունը
                </Button>
              </form>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary={`Երկիր: ${userData?.country}`}
                className={classes.prevName}
              />
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
              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeCountry}>
                  Հաստատել փոփոխությունը
                </Button>
              </form>
            </ListItem>
            <ListItem className={classes.listItem}>
              <div>
                <ListItemText primary={`Ուսումնական հաստատության անվանում: `} />
                <div>{userData?.educationCenter}</div>
              </div>

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
                    value={'Հայաստանի պետական տնտեսագիտական համալսարան (ՀՊՏՀ)'}>
                    Հայաստանի պետական տնտեսագիտական համալսարան (ՀՊՏՀ)
                  </MenuItem>
                  <MenuItem value={'Հայաստանի գեղարվեստի պետական ակադեմիա'}>
                    Հայաստանի գեղարվեստի պետական ակադեմիա
                  </MenuItem>
                  <MenuItem value={'Երևանի թատրոնի և կինոյի պետական ինստիտուտ'}>
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
                  <MenuItem value={'Երևանի պետական բժշկական համալսարան (ԵՊԲՀ)'}>
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
              <form className={classes.wrapperOfAcceptChangesButton}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={classes.acceptChangesButton}
                  onClick={changeEducationalCenter}>
                  Հաստատել փոփոխությունը
                </Button>
              </form>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                primary={`Ընթերցանության վարկանիշ: ${userData?.scoreForReading}`}
              />
            </ListItem>
          </List>
        )}
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
}));
