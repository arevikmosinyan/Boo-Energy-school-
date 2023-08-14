import React from 'react';
import {
  makeStyles,
  Select,
  MenuItem,
  FormControl,
  Paper,
  InputBase,
  IconButton,
} from '@material-ui/core';

import { colors, fonts } from '../constants/variables';
import { useState } from 'react';
import { menuListOfSubjects } from './Categories';
import { useContext } from 'react';
import userDataContext from '../contexts/userDataContext';

const Rating = () => {
  const classes = useStyles();
  const [subject, setSubject] = useState('');
  const [quiz, setQuiz] = useState('');
  const [participant, setParticipant] = useState('');
  const userData = useContext(userDataContext);

  function handleChangeOfSubject(event) {
    setSubject(event.target.value);
  }

  function handleChangeOfQuiz(event) {
    setQuiz(event.target.value);
  }

  return (
    <div className={classes.containerOfRating}>
      <div className={classes.wrapperOfCourseQuizzessParticipant}>
        <p className={classes.label}> Ձեր ընդհանուր վարկանիշը </p>
        <div className={classes.wrapperOfRatingSchedule}>
          <div className={classes.nameAndSurnameBar}>
            {userData?.name} {userData?.surname}
          </div>
          <div className={classes.valueOfRatingBar}>52</div>
        </div>
        <p className={classes.label}>որից՝</p>

        <div className={classes.wrapperOfLabelAndSelect}>
          <p className={classes.label}>Դասընթաց</p>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              className={classes.select}
              value={subject}
              onChange={handleChangeOfSubject}
              displayEmpty
              inputProps={{
                name: 'subject',
                id: 'subject-select-placeholder',
              }}>
              <MenuItem
                value=''
                disabled
                selected
                hidden
                className={classes.menuItem}>
                Ընտրել
              </MenuItem>
              <MenuItem value={10} className={classes.menuItem}>
                Մաթեմատիկա
              </MenuItem>
              <MenuItem value={20} className={classes.menuItem}>
                Անգլերեն
              </MenuItem>
              <MenuItem value={30} className={classes.menuItem}>
                Ծրագրավորում
              </MenuItem>
              <MenuItem value={40} className={classes.menuItem}>
                Գրաֆիկ դիզայն
              </MenuItem>
              <MenuItem value={50} className={classes.menuItem}>
                UI/UX դիզայն
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.valueOfRatingBar}>52</div>

        <div className={classes.wrapperOfLabelAndSelect}>
          <p className={classes.label}>Թեստ</p>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              className={classes.select}
              value={quiz}
              onChange={handleChangeOfQuiz}
              displayEmpty>
              <MenuItem
                value=''
                disabled
                selected
                hidden
                className={classes.menuItem}>
                Ընտրել
              </MenuItem>
              <MenuItem value={10} className={classes.menuItem}>
                Մաթեմատիկա
              </MenuItem>
              <MenuItem value={20} className={classes.menuItem}>
                Անգլերեն
              </MenuItem>
              <MenuItem value={30} className={classes.menuItem}>
                Ծրագրավորում
              </MenuItem>
              <MenuItem value={40} className={classes.menuItem}>
                Գրաֆիկ դիզայն
              </MenuItem>
              <MenuItem value={50} className={classes.menuItem}>
                UI/UX դիզայն
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.valueOfRatingBar}>52</div>
      </div>
    </div>
  );
};

export default Rating;
/*-----------------------------------------Styles--------------------------------------------*/
const useStyles = makeStyles({
  containerOfRating: {
    margin: 80,
  },
  // wrapperOfCourseQuizzessParticipant: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   padding: 20,
  // },
  wrapperOfLabelAndSelect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  label: {
    color: colors.darkGreen,
    fontSize: 32,
    fontFamily: fonts.armenian,
    margin: 20,
  },
  select: {
    backgroundColor: colors.lightGreen,
    color: colors.white,
    width: 200,
    borderRadius: 15,
  },
  menuItem: {
    color: colors.white,
  },
  nameAndSurnameBar: {
    backgroundColor: colors.lightGreen,
    flex: 2,
    height: 60,
    margin: 20,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  valueOfRatingBar: {
    backgroundColor: colors.veryLightGreen,
    flex: 4,
    height: 60,
    margin: 20,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    paddingRight: 40,
    borderRadius: 10,
  },
  wrapperOfRatingSchedule: {
    marginTop: 50,
    display: 'flex',
  },
});
