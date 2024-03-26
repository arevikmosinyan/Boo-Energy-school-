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
import { useTranslation } from 'react-i18next';

const Rating = () => {
  const classes = useStyles();
  const classesForMediaQueries = mediaQueries();

  const [subject, setSubject] = useState('');
  const [quiz, setQuiz] = useState('');
  const [participant, setParticipant] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const userData = useContext(userDataContext);
  const user = useContext(userContext);
  const { t } = useTranslation();

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
          <p className={classes.label}>{t('ratingHeaderForRegisteredUser')} </p>
          <div
            className={`${classes.wrapperOfRatingSchedule} ${classesForMediaQueries.wrapperOfRatingSchedule}`}>
            <div className={classes.nameAndSurnameBar}>
              {userData?.name} {userData?.surname}
            </div>
            <div
              className={`${classes.valueOfRatingBar} ${classesForMediaQueries.valueOfRatingBar}`}>
              {userData?.scoreForReading} + միավոր թեստերից
            </div>
          </div>
          <p className={classes.label}>{t('ofWhich')}</p>
          <div
            className={`${classes.wrapperOfLabelAndSelectAndValueOfRatingBar} ${classesForMediaQueries.wrapperOfLabelAndSelectAndValueOfRatingBar}`}>
            <div
              className={`${classes.wrapperOfLabelAndSelect} ${classesForMediaQueries.wrapperOfLabelAndSelect}`}>
              <p className={`${classes.label} ${classesForMediaQueries.label}`}>
                {t('courses')}
              </p>
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
                    {t('select')}
                  </MenuItem>
                  <MenuItem
                    value={10}
                    id='math'
                    onClick={handleId}
                    className={classes.menuItem}>
                    {t('mathematics')}
                  </MenuItem>
                  <MenuItem
                    value={20}
                    id='english'
                    onClick={handleId}
                    className={classes.menuItem}>
                    {t('english')}
                  </MenuItem>
                  <MenuItem
                    value={30}
                    id='programming'
                    onClick={handleId}
                    className={classes.menuItem}>
                    {t('programming')}
                  </MenuItem>
                  <MenuItem
                    value={40}
                    id='graphicDesign'
                    onClick={handleId}
                    className={classes.menuItem}>
                    {t('graphicDesign')}
                  </MenuItem>
                  <MenuItem
                    value={50}
                    id='UI/UXDesign'
                    onClick={handleId}
                    className={classes.menuItem}>
                    {t('UX/UI')}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              className={`${classes.valueOfRatingBar} ${classesForMediaQueries.valueOfRatingBar}`}>
              {renderScoreBasedOnId()}
            </div>
          </div>
          <div
            className={`${classes.wrapperOfLabelAndSelectAndValueOfRatingBar} ${classesForMediaQueries.wrapperOfLabelAndSelectAndValueOfRatingBar}`}>
            <div
              className={`${classes.wrapperOfLabelAndSelect} ${classesForMediaQueries.wrapperOfLabelAndSelect}`}>
              <p className={`${classes.label} ${classesForMediaQueries.label}`}>
                {t('tests')}
              </p>
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
                    {t('select')}
                  </MenuItem>
                  <MenuItem value={10} className={classes.menuItem}>
                    {t('mathematics')}
                  </MenuItem>
                  <MenuItem value={20} className={classes.menuItem}>
                    {t('english')}
                  </MenuItem>
                  <MenuItem value={30} className={classes.menuItem}>
                    {t('programming')}
                  </MenuItem>
                  <MenuItem value={40} className={classes.menuItem}>
                    {t('graphicDesign')}
                  </MenuItem>
                  <MenuItem value={50} className={classes.menuItem}>
                    {t('UX/UI')}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              className={`${classes.valueOfRatingBar} ${classesForMediaQueries.valueOfRatingBar}`}>
              Դեռ պատրաստ չէ
            </div>
          </div>
        </div>
      ) : (
        <Container
          className={classes.containerpaperForNotRegisteredUserOfRatingSection}>
          <Paper className={classes.paperForNotRegisteredUserOfRatingSection}>
            <h1 className={classes.headerOfNonRegisterdUserRatingSection}>
              {t('headerOfNonRegisterdUserRatingSection')}
              {/* Գրանցվե՛ք, վաստակեք համապատասխան վարկանիշ */}
            </h1>
            <Typography
              paragraph
              className={classes.infoForNotRegisteredUserOfRatingSection}>
              {/* <span
                className={
                  classes.firstWordOfInfoForNotRegisteredUserOfRatingSection
                }>
                Հարգելի՛
              </span>
              օգտատեր, գրանցվելով մեր կայքում, հնարավորություն կունենաք վաստակել
              միավորներ ընթերցած դասընթացներից և անցած թեստերից։ Վաստակած
              միավորները կտեսնեք այս էջում։ */}
              {t('infoForNotRegisteredUserOfRatingSection')}
            </Typography>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default Rating;
/*-----------------------------------------Mobile-firstStyles--------------------------------------------*/
const useStyles = makeStyles({
  containerOfRating: {
    margin: 80,
  },
  wrapperOfLabelAndSelect: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  label: {
    color: colors.darkGreen,
    fontSize: 32,
    fontFamily: fonts.armenian,
    margin: 20,
    textAlign: 'center',
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
    flex: 1,
    height: 60,
    margin: 3,
    padding: '10px 0',
    fontSize: 'clamp(7px, 8vw, 18px)',
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
    margin: 3,
    padding: '10px 0',
    fontSize: 'clamp(7px, 8vw, 18px)',
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingRight: 40,
    borderRadius: 10,
  },
  wrapperOfRatingSchedule: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  containerpaperForNotRegisteredUserOfRatingSection: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  paperForNotRegisteredUserOfRatingSection: {
    padding: 10,
  },
  infoForNotRegisteredUserOfRatingSection: {
    textIndent: 5,
    color: colors.darkGreen,
    textAlign: 'center',
  },
  headerOfNonRegisterdUserRatingSection: {
    textAlign: 'center',
    margin: 20,
    color: colors.darkGreen,
    padding: 10,
    wordWrap: 'break-word',
    hyphens: 'auto',
  },
  firstWordOfInfoForNotRegisteredUserOfRatingSection: {
    paddingLeft: 15,
  },
});
/*----------------------------------------------media queries---------------------------------------------*/
const mediaQueries = makeStyles({
  '@media (min-width:993px) ': {
    wrapperOfLabelAndSelect: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },
    wrapperOfRatingSchedule: {
      flexDirection: 'row',
    },
    wrapperOfLabelAndSelectAndValueOfRatingBar: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
    valueOfRatingBar: {
      flex: 1,
    },
    label: {
      margin: 3,
    },
  },
});
