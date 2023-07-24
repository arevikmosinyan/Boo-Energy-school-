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
import SearchIcon from '@material-ui/icons/Search';
import { colors, fonts } from '../constants/variables';
import { useState } from 'react';
import { menuListOfSubjects, ratingList } from './Categories';
import { v4 as uuid } from 'uuid';

const Rating = () => {
  const classes = useStyles();
  const [subject, setSubject] = useState('');
  const [quiz, setQuiz] = useState('');
  const [participant, setParticipant] = useState('');

  function handleChangeOfSubject(event) {
    setSubject(event.target.value);
  }

  function handleChangeOfQuiz(event) {
    setQuiz(event.target.value);
  }

  return (
    <div className={classes.containerOfRating}>
      <div className={classes.wrapperOfCourseQuizzessParticipant}>
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
      </div>
      <div className={classes.wrapperOfRatingSchedule}>
        {ratingList.map((ratedParticipantInfo) => {
          return (
            <div key={uuid()} style={{ display: 'flex' }}>
              <div className={classes.nameAndSurnameBar}>
                {ratedParticipantInfo.nameAndSurname}
              </div>
              <div className={classes.valueOfRatingBar}>
                {ratedParticipantInfo.value}
              </div>
            </div>
          );
        })}
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
  wrapperOfCourseQuizzessParticipant: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
  },
  wrapperOfLabelAndSelect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.darkGreen,
    fontSize: 32,
    fontFamily: fonts.armenian,
    marginRight: 20,
    marginLeft: 20,
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
    width: 500,
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
    width: 1115,
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
  },
});
