import React from 'react';
import {
  makeStyles,
  Select,
  MenuItem,
  FormControl,
  Paper,
  InputBase,
  IconButton,
  Container,
  Typography,
  Hidden,
} from '@material-ui/core';

import { colors, fonts } from '../constants/variables';
import { useState } from 'react';
import { menuListOfSubjects } from './Categories';
import { useContext } from 'react';
import userDataContext from '../contexts/userDataContext';
import userContext from '../contexts/userContext';

const Rating = () => {
  const classes = useStyles();
  const [subject, setSubject] = useState('');
  const [quiz, setQuiz] = useState('');
  const [participant, setParticipant] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const userData = useContext(userDataContext);
  const user = useContext(userContext);

  function handleChangeOfSubject(event) {
    setSubject(event.target.value);
  }

  function handleChangeOfQuiz(event) {
    setQuiz(event.target.value);
  }

  function handleId(event) {
    setSelectedItemId(event.target.id);
  }

  function renderScoreBasedOnId() {
    if (selectedItemId === 'math') {
      return scoreForMathClasses();
    }
    if (selectedItemId === 'english') {
      return scoreForEngClasses();
    }
    if (selectedItemId === 'programming') {
      return scoreForProgrammingClasses();
    }
    if (selectedItemId === 'graphicDesign') {
      return scoreForGraphicDesignClasses();
    }
    if (selectedItemId === 'UI/UXDesign') {
      return scoreForUxUiDesignClasses();
    }
  }

  function scoreForMathClasses() {
    let filteredArrayWhichIncludesAllClasses =
      userData?.alreadyReadClassesIds.filter((idName) =>
        idName.includes('class'),
      );

    let filteredArrayWhichIncludesOnlyMathClasses =
      filteredArrayWhichIncludesAllClasses.filter((idName) =>
        idName.includes('Math'),
      );
    return filteredArrayWhichIncludesOnlyMathClasses.length;
  }
  function scoreForEngClasses() {
    return 'english';
  }
  function scoreForProgrammingClasses() {
    return 'programming';
  }
  function scoreForGraphicDesignClasses() {
    return 'GraphicDesign';
  }
  function scoreForUxUiDesignClasses() {
    return 'UxUiDesign';
  }
  return (
    <div className={classes.containerOfRating}>
      {user ? (
        <div className={classes.wrapperOfCourseQuizzessParticipant}>
          <p className={classes.label}> Ձեր ընդհանուր վարկանիշը </p>
          <div className={classes.wrapperOfRatingSchedule}>
            <div className={classes.nameAndSurnameBar}>
              {userData?.name} {userData?.surname}
            </div>
            <div className={classes.valueOfRatingBar}>
              {userData?.scoreForReading} + միավոր թեստերից
            </div>
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
                <MenuItem
                  value={10}
                  id='math'
                  onClick={handleId}
                  className={classes.menuItem}>
                  Մաթեմատիկա
                </MenuItem>
                <MenuItem
                  value={20}
                  id='english'
                  onClick={handleId}
                  className={classes.menuItem}>
                  Անգլերեն
                </MenuItem>
                <MenuItem
                  value={30}
                  id='programming'
                  onClick={handleId}
                  className={classes.menuItem}>
                  Ծրագրավորում
                </MenuItem>
                <MenuItem
                  value={40}
                  id='graphicDesign'
                  onClick={handleId}
                  className={classes.menuItem}>
                  Գրաֆիկ դիզայն
                </MenuItem>
                <MenuItem
                  value={50}
                  id='UI/UXDesign'
                  onClick={handleId}
                  className={classes.menuItem}>
                  UI/UX դիզայն
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.valueOfRatingBar}>
            {renderScoreBasedOnId()}
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
          <div className={classes.valueOfRatingBar}>Դեռ պատրաստ չէ</div>
        </div>
      ) : (
        <Container
          className={classes.containerpaperForNotRegisteredUserOfRatingSection}>
          <Paper className={classes.paperForNotRegisteredUserOfRatingSection}>
            <h1 className={classes.headerOfNonRegisterdUserRatingSection}>
              Գրանցվե՛ք, վաստակեք համապատասխան վարկանիշ
            </h1>
            <Typography
              paragraph
              className={classes.infoForNotRegisteredUserOfRatingSection}>
              <span
                className={
                  classes.firstWordOfInfoForNotRegisteredUserOfRatingSection
                }>
                Հարգելի՛
              </span>
              օգտատեր, գրանցվելով մեր կայքում, հնարավորություն կունենաք վաստակել
              միավորներ ընթերցած դասընթացներից և անցած թեստերից։ Վաստակած
              միավորները կտեսնեք այս էջում։
            </Typography>
          </Paper>
        </Container>
      )}
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
  containerpaperForNotRegisteredUserOfRatingSection: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  paperForNotRegisteredUserOfRatingSection: {
    padding: 50,
  },
  infoForNotRegisteredUserOfRatingSection: {
    textIndent: 1,
    color: colors.darkGreen,
  },
  headerOfNonRegisterdUserRatingSection: {
    textAlign: 'center',
    margin: 20,
    color: colors.darkGreen,
  },
  firstWordOfInfoForNotRegisteredUserOfRatingSection: {
    paddingLeft: 15,
  },
});
